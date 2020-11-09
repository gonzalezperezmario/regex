

db . graficas . find ({ $nor: [{  precio: {  $in: ["150","300"] }}, { tdp:{  $gte: 90} } ] } )

db . graficas . find ({ $or: [{  ensambladora: {  $eq: "Nvidia" }}, { fecha:{  $lt: ("2017, 5, 17")} } ] } )


