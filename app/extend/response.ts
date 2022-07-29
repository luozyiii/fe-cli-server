module.exports = {
  /**
   * @description
   * @param {*} { data, status }
   */
  success({ data, status }) {
    const { ctx } = this;
    ctx.body = {
      code: '0',
      message: 'success',
      result: data || null,
      sysTime: ctx.helper.now(),
    };
    ctx.status = status || 200;
  },

  /**
   * @description
   * @param {*} { status, code, message, data }
   */
  failure({ status, code, message, data }) {
    const { ctx } = this;
    ctx.body = {
      code: code || '-1',
      message: message || 'no message',
      result: data || null,
      sysTime: ctx.helper.now(),
    };
    ctx.status = status || 200;
  },
};
