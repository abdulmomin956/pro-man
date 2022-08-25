import React, { useContext, useState } from "react";
import { Paper, InputBase, Button, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { alpha, makeStyles } from "@material-ui/core/styles";
import storeApi from "../../../utils/storeApi";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useRef } from 'react';

const useStyle = makeStyles((theme) => ({
  card: {
    width: "280px",
    margin: theme.spacing(0, 0, 0, 1),
    paddingBottom: theme.spacing(0),
    // padding: theme.spacing(1, 1, 1, 0),
  },
  input: {
    margin: theme.spacing(1),
  },
  btnConfirm: {
    background: "#5AAC44",
    color: "#fff",
    "&:hover": {
      background: alpha("#5AAC44", 0.75),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

const InputCard = ({ data, setOpen, listId, type, open }) => {
  const ref = useRef(null);
  const classes = useStyle();
  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log(title);
  }, [title])


  const handleBtnConfirm = () => {
    console.log(title);
    if (title === "") {
      alert("Please Provide Your Task");
      return;
    }

    if (type === "card") {
      addMoreCard(title, listId);
      setTitle("");


    } else {
      addMoreList(title);
      setTitle("");
      setOpen(false);
    }

  };

  useEffect(() => {
    // console.log(open);
    if (open) {
      // console.log(ref.current.childNodes[0]);
      ref.current.childNodes[0].focus();
    }
  }, [open])

  const handleBlur = () => {
    setOpen(false);
    // setTitle("");
  };
  // console.log(cardTitle);
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleBtnConfirm()
      console.log("hello")
    }
  }

  return (
    <div

    >
      <div >
        <Paper className={classes.card}>
          <InputBase
            ref={ref}
            onChange={(e) => setTitle(e.target.value)}
            multiline
            onKeyDown={handleKeyDown}
            // onBlur={() => { setOpen(false) }}
            fullWidth
            inputProps={{ className: classes.input }}
            defaultValue={title}
            placeholder={
              type === "card"
                ? "Enter a title of this card.."
                : "Enter list title..."
            }
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button
          className={classes.btnConfirm}
          onClick={() => handleBtnConfirm()}
        >
          {type === "card" ? "Add Card" : "Add List"}
        </Button>

        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default InputCard;
