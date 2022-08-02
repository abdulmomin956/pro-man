import React, { useContext, useState } from "react";
import { Paper, InputBase, Button, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { alpha, makeStyles } from "@material-ui/core/styles";
import storeApi from "../../../utils/storeApi";
import { toast } from "react-toastify";

const useStyle = makeStyles((theme) => ({
  card: {
    width: "280px",
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
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

const InputCard = ({ data, setOpen, listId, type }) => {
  const classes = useStyle();
  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [title, setTitle] = useState("");


  const handleBtnConfirm = () => {
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

  const handleBlur = () => {
    setOpen(false);
    setTitle("");
  };
  // console.log(cardTitle);

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={(e) => setTitle(e.target.value)}
            multiline
            // onBlur={() => setOpen(false)}
            fullWidth
            inputProps={{ className: classes.input }}
            value={title}
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
