import { Model } from 'mongoose'
import BaseEntity from '../entities/BaseEntity'

abstract class BaseService {
  BaseModel: any

  constructor(BaseModel: any) {
    this.BaseModel = BaseModel
  }

  index = () => {
    return new Promise(async (resolve, reject) => {
      try {
        let data = await this.BaseModel.find()
        return resolve(data)
      } catch (error) {
        return reject(error)
      }
    })
  }

  show = (id: String) => {
    return new Promise(async (resolve, reject) => {
      try {
        return resolve(await this.BaseModel.findById(id))
      } catch (error) {
        return reject(error)
      }
    })
  }

  store = (data: Object) => {
    return new Promise(async (resolve, reject) => {
      try {
        return resolve(await this.BaseModel.create(data))
      } catch (error) {
        return reject(error)
      }
    })
  }

  update = (id: String, data: Object) => {
    return new Promise(async (resolve, reject) => {
      try {
        return resolve(await this.BaseModel.findByIdAndUpdate(id, data))
      } catch (error) {
        return reject(error)
      }
    })
  }

  destroy = (id: String) => {
    return new Promise(async (resolve, reject) => {
      try {
        return resolve(await this.BaseModel.findByIdAndDelete(id))
      } catch (error) {
        return reject(error)
      }
    })
  }
}

export default BaseService
