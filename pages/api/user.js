import cookie from 'cookie'

const user = async (req, res) => {
    if (!req.headers.cookie) {
        res.status(403).json({message: 'Not Authorized'})
        return;
    }
    const {token} = cookie.parse(req.headers.cookie)

    const 
}