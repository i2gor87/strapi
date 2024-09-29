module.exports = async (ctx, next) => {
  const { id } = ctx.params; // Get the ID from the request
  const user = ctx.state.user; // Get the authenticated user

  // If it's a collection fetch (no specific ID, i.e., find)
  if (!id) {
    // Modify the query to only return entries where the user is the owner
    ctx.query.user = user.id;
  } else {
    // For individual record fetches (findOne), check ownership
    const entity = await strapi.services.watching_cars.findOne({ id });
    if (entity && entity.user && entity.user.id !== user.id) {
      return ctx.unauthorized('You are not authorized to access this entry.');
    }
  }

  // Allow the request to proceed if conditions are met
  return await next();
};
