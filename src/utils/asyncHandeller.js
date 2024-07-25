const asyncHandeller = (fn) => {
    (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err => next(err)))
    }
}

// const asyncHandeller = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)

//     }
//     catch (err) {
//         res.status(err.code || 500).json({
//             status: false,
//             message: err.message
//         })
//     }


// }

export { asyncHandeller }
