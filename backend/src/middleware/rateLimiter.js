import ratelimit from "../config/upstash.js"

const rateLimiter = async (req, res, next) => {

    try {
        const { success } = await ratelimit.limit("my-limit-key")

        if (!success) {
            return res.status(429).json({
                message: "Muchas solicitudes/requests, inténtelo más tarde"
            })
        }

        next()

    } catch (error) {
        console.log("Error de límite de velocidad (ratelimit)")
        next(error)
    }
}

export default rateLimiter