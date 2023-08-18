import React, { useState } from 'react'
import { db } from '../../../../auth/firebase'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

function AddService({ setModalShow }) {
    const [name, setName] = useState('')
    const [descriptions, setDescriptions] = useState('')
    const [loading, setLoading] = useState(false)
    const serciceID = db.collection('services').doc().id

    const submitFun = () =>{
        setLoading(true)
        if(!name){
            toast.error('Please enter title',{
                position:'top-center'
            })
            setLoading(false)
        }else if(!descriptions){
            toast.error('Please enter descriptions',{
                position:'top-center'
            })
            setLoading(false)
        }else{
            db.collection('services').doc(serciceID).set({
                title:name,
                descriptions,
                serciceID,
                images:[],
                timestamp:Date.now()
            }).then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Service added successfully',
                    text:"Images will be added after adding service",
                    showConfirmButton: false,
                    timer: 5000
                })
                setLoading(false)
                setModalShow(false)
            }).catch(err => {
                toast.error(err.message,{
                    position:'top-center'
                })
                setLoading(false)
            })
        }
    }

  return (
    <div>
    <div className="col-lg-12 col-sm-6">
    <div className="form-group">
      <label>Title</label>
      <input
      value={name}
      onChange={(e) => {
        setName(e.target.value)
    }}
      type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" />
      <div className="help-block with-errors" />
    </div>
  </div>
  <div className="col-lg-12">
    <div className="form-group">
      <label>Descriptions</label>
      <textarea
      value={descriptions}
      onChange={(e) => {
        setDescriptions(e.target.value)
    }}
      name="message" className="form-control" id="message" cols={30} rows={6} required data-error="Write your message" defaultValue={""} />
      <div className="help-block with-errors" />
    </div>
  </div>
  <div style={{marginTop:10}} className="col-lg-12 col-md-12">
    <button  onClick={submitFun} className="default-btn">
      {loading ? 'Adding service...' : 'Add Service'}
    </button>
    <div id="msgSubmit" className="h3 text-center hidden" />
    <div className="clearfix" />
  </div>
    </div>
  )
}

export default AddService