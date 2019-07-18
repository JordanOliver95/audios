import predict from '../services/PredictionService'

export default (request, response, next) => {
   response.send(predict(request.body))
}
