module.exports = {
  apiPrefix: '',

  /* Layout configuration, specify which layout to use for route. */
  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exlude: [/login/],
    },
  ],
};
