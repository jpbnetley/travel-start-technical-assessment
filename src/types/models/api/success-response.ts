type SuccessResponse<Data> = {
  data: Data
  next?: string,
  total: number
}