import { Client } from '@elastic/elasticsearch'
const client = new Client({ node: 'http://104.154.19.219:9200' })
export { jeeadvanceFeamale, jeeadvanceMale }; 
const jeeadvanceFeamale = async (category:String,allotted_quota:String,closing_rank:Number)=>{
  const { body } = await client.search({
      index: 'college',
      size:10000,
      body: {
        sort: [{ "closing_rank": { "order": "asc" } }],
        query: {
          bool:{
          must:[{match:{entrance:'advance'}},{match:{category}},{match:{allotted_quota}},{range:{closing_rank:{gte:closing_rank}}}]
      
        }},
      }
    })
    return body.hits.hits
  }

  const jeeadvanceMale = async(category:String,allotted_quota:String,closing_rank:Number)=>{
    const { body } = await client.search({
        index: 'college',
        size:10000,

        body: {
          sort: [{ "closing_rank": { "order": "asc" } }],
          query: {
            bool:{
            must:[{match:{entrance:'advance'}},{match:{seat_pool:'Gender-Neutral'}},{match:{category}},{match:{allotted_quota}},{range:{closing_rank:{gte:closing_rank}}}]
        
          }},
        }
      })
      return body.hits.hits
    }
//jeeadvanceFeamle('OBC-NCL','AI',5300)
