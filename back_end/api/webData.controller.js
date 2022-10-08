import webDataDAO from "../dao/webDataDAO";

export default class webDataControllers{
    static async apiGetWebData(req,res,next){
        const webDataPerPage = req.query.webDataPerPage ? parseInt(req.query.webDataPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}

        if(req.query.cuisine){
            filters.cuisine = req.query.cuisine 
        } else if (req.query.zipcode) {
            filters.zipcode = req.query.zipcode 
        } else if (req.query.name) {
            filters.name = req.query.name
        }

        const {webDataList, totalNumWebData} = await webDataDAO.getWebData({
            filters,
            page,
            webDataPerPage,
        })

        let response = {
            webData: webDataList,
            page: page,
            filters: filters,
            entries_per_page: webDataPerPage,
            total_results: totalNumWebData,
        }
        res.json(response)
    }
}