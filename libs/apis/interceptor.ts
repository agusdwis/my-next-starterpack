/* eslint-disable no-console */
const Interceptor = (api: any) => {
  api.interceptors.request.use(
    (request: any) =>
      //   console.log('REQUEST', request);
      request,
    (error: any) => {
      Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response: any) =>
      //   console.log('RESPONSE', response);
      response,
    (error: any) => {
      Promise.reject(error);
    }
  );
};

export default Interceptor;
