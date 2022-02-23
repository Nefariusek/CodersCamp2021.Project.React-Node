import mongoose from 'mongoose';

const MOCK_USERS = [
  {
    username: 'AidKitMan',
    email: 'aidkitman@gmail.com',
    password: '5!E@c#r$e%1',
    profileRef: new mongoose.Types.ObjectId(),
  },
  {
    username: 'AidKitWoman',
    email: 'aidkitwoman@gmail.com',
    password: 'SeCrEtP@55',
    profileRef: new mongoose.Types.ObjectId(),
  },
  {
    username: 'AidKitSomeone',
    email: 'aidkitsomeone@hotmail.com',
    password: 'qWeRtY&123',
    profileRef: new mongoose.Types.ObjectId(),
  },
  {
    username: 'MrAidKit',
    email: 'mraidkit@gmail.com',
    password: 'Abcd#1234',
    profileRef: new mongoose.Types.ObjectId(),
  },
  {
    username: 'MrAlwaysIll',
    email: 'mralwaysill@gmail.com',
    password: 'Awesome1Pa$$word',
    profileRef: new mongoose.Types.ObjectId(),
  },
];

export default mockUsers;
