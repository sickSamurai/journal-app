import { cleanErrors } from '../../../redux/auth'
import { useMyDispatch, useMySelector } from '../../../redux/hooks'

export const useErrorDialog = () => {
  const { errorMessage } = useMySelector(state => state.authReducer)
  const dispatch = useMyDispatch()

  const handleClose = (): void => {
    dispatch(cleanErrors())
  }

  return { errorMessage, handleClose }
}
