import productModel from "../models/product.js"

export const getAllProductsStatic= async(req,res)=>{
    // const search= 'ab'
    // const product=await productModel.find({
    //     name: { $regex: search, $options: 'i' }
    // })

    // const product=await productModel.find({}).sort('-name price')     //-name → name descending, price → price ascending
    const product=await productModel.find({price: { $gt:30 }})
    .sort('price')               // sort  → ascending/descending
    .select('name price')
    // .limit(4)
    // .skip(2)
    res.status(200).json({product, nbHits:product.length})
}
export const getAllProducts= async(req,res)=>{
    const { featured, company, name, sort, fields, numericFilters } = req.query;   // safe destructuring

    const queryObject = {};

    if (featured) {
        queryObject.featured = featured === 'true' ? true: false;
    }
    if (company){
        queryObject.company = company
    }
    if (name){
        queryObject.name={$regex:name, $options:'i'}
    }
    let result =  productModel.find(queryObject);
    //SORT
    if (sort){       
        const sortList= sort.split(',').join(' ')
        result=result.sort(sortList)
    }else{
        result=result.sort('createdAt')
    }

    // SELECT FIELDS
    if (fields){
        const fieldsList= fields.split(',').join(' ')
        result=result.select(fieldsList)
    }

    //NUMERIC FILTERS
    if (numericFilters){
        const operatorMap={
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte',
        }
        const regEX = /\b(<|>|>=|=|<=)\b/g;

        let filters= numericFilters.replace(regEX,(match)=>`-${operatorMap[match]}-`)

        const options= ['price','rating']
        filters=filters.split(',').forEach((item)=>{
            const[field, operator, value]= item.split('-')
            if(options.includes(field)){
                queryObject[field]={ [operator]: Number(value)}
            }
        })
        console.log(queryObject)
    }

    //PAGINATION --> limit, skip, page
    const page=Number(req.query.page) ||1
    const limit=Number(req.query.limit) ||10
    const skip= (page-1)*limit
    result= result.skip(skip).limit(limit)

    const product= await result
    
    res.status(200).json({product, nbHits:product.length})
}