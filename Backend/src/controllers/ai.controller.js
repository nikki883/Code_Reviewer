import aiServerice from '../services/ai.service.js'

export const getReview = async(req,res) => {

    const code = req.body.code ;
    if(!code){
        return res.status(400).send(" prompt is required ");
    }

    const response = await aiServerice(code)

    res.send(response);
}