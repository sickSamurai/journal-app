import axios from 'axios'

const cloudName = 'drqhlu4eb'
const uploadPreset = 'journal-app'
const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`

interface CloudinaryResponse {
  data: { url: string }
  status: number
  statusText: string
}

export const postImagesToCloudinary = async (files: FileList) => {
  const promises: Promise<CloudinaryResponse>[] = []

  for (let index = 0; index < files.length; index++) {
    const data = new FormData()
    data.append('file', files.item(index)!)
    data.append('upload_preset', uploadPreset)
    promises.push(axios.post<FormData, CloudinaryResponse>(url, data))
  }

  const responses = await Promise.all(promises)

  return responses.map(response => response.data.url)
}
