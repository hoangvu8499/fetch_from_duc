import { Loading } from 'components'
import Table from 'components/table'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersRequest } from 'store/actions/user'
import { RootState } from 'store/interface'
import avatarDefault from 'assets/images/faces/user-default.png'

const Users: React.FC = () => {
  const loading = useSelector((state: RootState) => state.user.loading)
  const users = useSelector((state: RootState) => state.user.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsersRequest())
  }, [dispatch])
  const headerCells = useMemo(() => {
    return [
      {
        label: 'Avatar',
        field: 'avatar',
        render: (rowData: any, index: number, data?: string,) => (
          <img
            key={index}
            src={data ?? avatarDefault}
            alt={rowData.name}
            onError={(e) => {
              (e.target as HTMLImageElement).setAttribute(
                'src',
                avatarDefault
              );
            }}
          />
        )
      },
      {
        label:  'Name',
        field: 'name'
      },
      {
        label:  'Email',
        field: 'email'
      },
      {
        label:  'Phone',
        field: 'phone'
      }
    ]
  }, [])
  return (
    <div className='row'>
      {loading ? (
        <Loading />
      ) : (
        <div className='col-lg-12 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Striped Table</h4>
              <div className='table-responsive'>
                <Table headerCells={headerCells} dataRow={users} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Users
