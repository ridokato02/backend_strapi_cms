/**
 * =====================================================
 * CẤU HÌNH MIDDLEWARES CHO PRODUCTION
 * =====================================================
 * 
 * File này là VÍ DỤ cho cấu hình production với CORS
 * 
 * Để sử dụng:
 * 1. Copy nội dung này vào file middlewares.ts
 * 2. Hoặc đổi tên file này thành middlewares.ts và backup file cũ
 * 3. Cấu hình biến môi trường CORS_ORIGIN trong .env
 * 
 * Biến môi trường cần thiết:
 * CORS_ORIGIN=https://example.com,https://www.example.com
 */

export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  
  // =====================================================
  // CORS CONFIGURATION CHO PRODUCTION
  // =====================================================
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      
      // Danh sách các origin được phép
      // Trong development: Strapi tự động cho phép localhost
      // Trong production: PHẢI chỉ định rõ các domain
      origin: [
        // Development origins
        'http://localhost:3000',
        'http://localhost:3001',
        
        // Production origins - LẤY TỪ ENV
        ...(process.env.CORS_ORIGIN 
          ? process.env.CORS_ORIGIN.split(',').map(origin => origin.trim())
          : []
        ),
        
        // Hoặc hardcode nếu không muốn dùng env:
        // 'https://example.com',
        // 'https://www.example.com',
      ],
      
      // Headers được phép
      headers: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'X-Requested-With',
        'Accept',
        'Origin',
      ],
      
      // Cho phép gửi credentials (cookies, auth tokens)
      credentials: true,
      
      // Methods được phép
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      
      // Exposed headers (headers mà browser có thể đọc)
      exposedHeaders: ['Content-Range', 'X-Content-Range'],
      
      // Max age của preflight request (tính bằng giây)
      maxAge: 31536000, // 1 năm
    },
  },
  
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  
  // =====================================================
  // SECURITY CONFIGURATION
  // =====================================================
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            `${process.env.MINIO_ENDPOINT}`,
            // Thêm domain của bạn nếu serve images từ nơi khác
            // 'https://cdn.example.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            `${process.env.MINIO_ENDPOINT}`,
          ],
          'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          'style-src': ["'self'", "'unsafe-inline'"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];

/**
 * =====================================================
 * GIẢI THÍCH VỀ CORS
 * =====================================================
 * 
 * 1. TẠI SAO CẦN CẤU HÌNH CORS TRONG PRODUCTION?
 *    - Browser có Same-Origin Policy
 *    - Nếu frontend ở example.com và backend ở api.example.com
 *    - Browser sẽ block request → Cần CORS để cho phép
 * 
 * 2. CORS HOẠT ĐỘNG NHƯ THẾ NÀO?
 *    - Browser gửi OPTIONS request trước (preflight)
 *    - Server trả về headers cho phép:
 *      Access-Control-Allow-Origin: https://example.com
 *      Access-Control-Allow-Methods: GET, POST, ...
 *      Access-Control-Allow-Headers: Content-Type, Authorization
 *    - Nếu OK, browser mới gửi request thực sự
 * 
 * 3. NẾU KHÔNG CẤU HÌNH ĐÚNG:
 *    - Sẽ gặp lỗi: "Access to fetch blocked by CORS policy"
 *    - Frontend không thể gọi API được
 * 
 * 4. NẾU DÙNG NGINX LÀM REVERSE PROXY:
 *    - Frontend và backend trên cùng domain (example.com và example.com/api)
 *    - → KHÔNG CẦN lo về CORS (same origin)
 *    - Nhưng vẫn nên cấu hình để phòng trường hợp gọi trực tiếp
 */

