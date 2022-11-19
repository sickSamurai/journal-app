import { AnyAction, ThunkAction } from '@reduxjs/toolkit'

import { StoreState } from './StoreState'

export type MyThunkAction = ThunkAction<void, StoreState, unknown, AnyAction>
