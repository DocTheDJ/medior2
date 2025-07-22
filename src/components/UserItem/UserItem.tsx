import { ReactElement, ReactNode } from 'react';
import { User } from '@/shared/types';

function UserInfoItem({ label, value }: { label: string, value: ReactNode }): ReactElement {
  return (
    <div className="flex text-gray-600 text-sm">
      <p className="font-medium w-24 flex-shrink-0 opacity-50">{label}</p>
      <p className="text-ellipsis">{value}</p>
    </div>
  );
}

export function UserItem(props: { user: User }): ReactElement {
  const { user } = props;
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm shadow-gray-light-1 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-0">{user.name}</h2>

      <div className="mb-4">
        <UserInfoItem label="Username" value={user.username} />
        <UserInfoItem label="Email" value={user.email} />
        <UserInfoItem label="Phone" value={user.phone} />
        <UserInfoItem label="Website" value={user.website} />
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-700">Address</h3>
          <a href="#" className="text-blue-600 hover:underline text-sm">Show on map</a>
        </div>
        <UserInfoItem label="Street" value={user.address?.street} />
        <UserInfoItem label="Suite" value={user.address?.suite} />
        <UserInfoItem label="City" value={user.address?.city} />
        <UserInfoItem label="Zipcode" value={user.address?.zipcode} />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Company</h3>
        <UserInfoItem label="Name" value={user.company?.name} />
        <UserInfoItem label="Catch phrase" value={user.company?.catchPhrase} />
        <UserInfoItem label="Bs" value={user.company?.bs} />
      </div>

      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
        Read articles
      </button>
    </div>
  );
}
