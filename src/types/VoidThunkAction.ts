import { AnyAction, ThunkAction } from '@reduxjs/toolkit'

import { StoreState } from '../redux/store'

export type VoidThunkAction = ThunkAction<void, StoreState, unknown, AnyAction>
