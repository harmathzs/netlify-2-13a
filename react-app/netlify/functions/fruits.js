/** endpoint: /.netlify/functions/fruits */
export const handler = async (event, context) => {
    console.log('endpoint /fruits called', event, context)
    return {
        statusCode: 200,
        body: JSON.stringify([
            {id: 1, name: "orange", healthy: true},
            {id: 2, name: "banana", healthy: true},
            {id: 3, name: "dates", healthy: false},
        ])
    }
}
