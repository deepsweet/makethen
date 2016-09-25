export default (fn) => (...args) => new Promise((resolve, reject) => {
    fn(...args, (error, ...results) => {
        if (error !== null) {
            return reject(error);
        }

        if (results.length === 1) {
            return resolve(results[0]);
        }

        resolve(results);
    });
});
