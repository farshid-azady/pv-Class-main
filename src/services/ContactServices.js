import axios from "axios";
const SERVER_URL = "http://localhost:3001";
//@desc:Get All contact By Name
//@route:GET/http://localhost:3001/contacts
export const getContacts = async () => {
  // 使用axios发送get请求，获取联系人信息
  const  data  = axios.get(`${SERVER_URL}/contacts`);
  return data;
};
//@desc:Get contact by id
//@route:GET/http://localhost:3001/contacts/:id

export const getContact=(id)=>{
  const data=axios.get(`${SERVER_URL}/contacts/${id}`);
  return data;
}
//@desc:Get contact Groups
//@route:GET/http://localhost:3001/groups
export const getGroups=()=>{
  const data= axios.get(`${SERVER_URL}/groups`);
  return data;
}
//@desc:Get contact Group
//@route:GET/http://localhost:3001/groups/:id
export const getGroup=(id)=>{
  const data=axios.get(`${SERVER_URL}/groups/${id}`);
  return data;
}
//@desc:Create new contact
//@route:GET/http://localhost:3001/contacts
export const addContact=(contact)=>{
  const data=axios.post(`${SERVER_URL}/contacts`,contact);
  return data;
}
//@desc:Update contact
//@route:GET/http://localhost:3001/contacts/:id
export const updateContact=(contact)=>{
  const data=axios.put(`${SERVER_URL}/contacts/${contact.id}`,contact);
  return data;
}
//@desc:Delete contact
//@route:GET/http://localhost:3001/contacts/:id
export const deleteContact=(id)=>{
  const data=axios.delete(`${SERVER_URL}/contacts/${id}`);
  return data;
}



