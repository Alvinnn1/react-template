// import Message from '@/plugin/Message';

const useHttpErrorHandle = (httpPromise: Promise<any>): Promise<any> => {
  return new Promise((resolve, reject) => {
    httpPromise
      .then((res: any) => {
        resolve(res);
      })
      .catch(err => {
        //7018不提示错误
        if ([7018].indexOf(err.errCode) === -1) {
          // Message.error(err.errCode);
        }
        reject(err);
      });
  });
};
export default useHttpErrorHandle;
