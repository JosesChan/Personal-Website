let webData

export default class webDataDAO{
    static async injectDB(conn){
        if (webData){
            return
        }
        try{
            webData = await conn.db(process.env.RESTREVIEWS_NS).collection("webData")
        } catch (e) {
            console.error(`Unable to establish a collection handle in webDataDAO: ${e}`)
        }
    }


    static async getWebData({
    filters = null,
    page = 0,
    webDataPerPage = 20,
    } = {}) {
    let query
    if(filters){
        if("name" in filters){
            query = {$text:{$search: filters["name"]}}
        } else if ("cuisine" in filters){
            query = {"cuisine":{ $eq: filters["cuisine"]}}
        } else if ("zipcode" in filters){
            query = {"address.zipcode": {$eq: filters["zipcode"]}}  
        }
    }

    let cursor

    try {
        cursor = await webData
            .find(query)
    } catch(e) {
        console.error(`Unable to issue find command, ${e}`)
        return {webDataList: [], totalNumWebData}
    }

    const displayCursor = cursor.limit(webDataPerPage).skip(webDataPerPage*page)

    try{
        const webDataList = await displayCursor.toArray()
        const totalNumWebData = page == 0 ? await webData.countDocument(query) : 0

        return {webDataList, totalNumWebData}
    } catch (e){
        console.error(
            `Unable to convert cursor to array or problem counting documents, ${e}`,
        )

        return {webDataList: [], totalNumWebData}
        }
    }
}