/**
 * order controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::order.order', ({ strapi }) => {
  // Default populate configuration
  const defaultPopulate = {
    users_id: true,
    payment_ids: true,
    coupon_id: true,
    affiliate_id: true,
    order_items: {
      populate: {
        product_id: true
      }
    }
  };

  return {
    async find(ctx) {
      // Convert populate=* (string) to object, or set default populate
      if (!ctx.query.populate || ctx.query.populate === '*') {
        ctx.query.populate = defaultPopulate;
      } else if (typeof ctx.query.populate === 'object') {
        // Merge with existing populate
        const existingPopulate = ctx.query.populate as any;
        ctx.query.populate = {
          ...defaultPopulate,
          ...existingPopulate,
          order_items: {
            populate: {
              product_id: true,
              ...(existingPopulate.order_items?.populate || {})
            }
          }
        };
      }
      
      // Call parent find method
      return super.find(ctx);
    },
    
    async findOne(ctx) {
      // Convert populate=* (string) to object, or set default populate
      if (!ctx.query.populate || ctx.query.populate === '*') {
        ctx.query.populate = defaultPopulate;
      } else if (typeof ctx.query.populate === 'object') {
        // Merge with existing populate
        const existingPopulate = ctx.query.populate as any;
        ctx.query.populate = {
          ...defaultPopulate,
          ...existingPopulate,
          order_items: {
            populate: {
              product_id: true,
              ...(existingPopulate.order_items?.populate || {})
            }
          }
        };
      }
      
      // Call parent findOne method
      return super.findOne(ctx);
    }
  };
});
