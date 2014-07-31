{
    error: 0,                   /*Error code*/
    msg: "",                    /*Execution message*/
    data: {                     /*Structured data, in this case is a paginated array*/
        page: [
            { /* Single record One */   },
            { /* Single record Two */   },
            { /* Single record Three */ },
            { /* Single record Four */ }
        ],
        totalRows: 10,          /*Number of rows on server side buffer*/
        totalPages: 3,          /*Number o pages to scroll*/
        pageNumber: 1,          /*Current page number*/
        pageSize: 4             /*Number of records per page*/
    }
}