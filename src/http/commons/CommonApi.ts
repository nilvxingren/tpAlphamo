import ApiClient from 'http/ApiClient'
import Response from 'model/response/Response'

export default class CommonApi {
  /**
   * 发送短信验证码
   *
   */
  static smsVerificationCode(mobile: string): Promise<Response<any>> {
    return ApiClient.server().post(`common/verificationcode/sms`, {}, {
      params: {
        mobile: mobile
      }
    }).then((res) => {
      return res.data
    })
  }

  static getValidOpendAppIds(): Promise<Response<string[]>> {
    return ApiClient.server().get(`common/validOpend/appIds`).then((res) => {
      return res.data
    })
  }

}
