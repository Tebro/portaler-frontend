import React, { FC, useCallback, useState } from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

import styles from './styles.module.scss'
import {deletePortal} from "../../common/utils/deletePortal";
import useGetPortals from "../../common/hooks/useGetPortals";

interface DeletePortalProps {
  portalId: string[]
  zoneNames: string[]
}

const DeletePortal: FC<DeletePortalProps> = ({ portalId, zoneNames }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const getPortals = useGetPortals()

  const handleClose = useCallback(
    (deleteZone: boolean) => {
      if (deleteZone) {
        deletePortal(portalId)
          .then(() => getPortals(true))
          .catch((e) => {
            alert("Deleting of portal failed!")
            console.log(e)
          })
      }

      setIsOpen(false)
    },
    [deletePortal, portalId]
  )

  return (
    <div className={styles.control}>
      <IconButton
        onClick={() => setIsOpen(true)}
        aria-label="home"
        title="focus home"
      >
        <DeleteIcon fontSize="large" color="secondary" />
      </IconButton>
      <Dialog
        open={isOpen}
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete the {zoneNames.join(' - ')} portal?
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={() => handleClose(false)}
            color="secondary"
            autoFocus
          >
            Cancel
          </Button>
          <Button onClick={() => handleClose(true)} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DeletePortal
