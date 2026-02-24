import {
  FormControl,
  MenuItem,
  Paper,
  Select,
  SvgIcon,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import { Bolt, DarkMode, LightMode, ViewInAr } from "@mui/icons-material";
import { useState } from "react";
import { useTheme } from "../store/useTheme";

export default function BasicGrid() {
  const [color, setColor] = useState("");
  const { theme, setTheme } = useTheme();
  const [isShow, setIsShow] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    setColor(event.target.value);
  };
  const products = [
    { id: 1, title: "Sitemark-web", subtitle: "Web app", img: "/svg/one.svg" },
    {
      id: 2,
      title: "Sitemark-app",
      subtitle: "Mobile application",
      img: "/svg/two.svg",
    },
    {
      id: 3,
      title: "Sitemark-Store",
      subtitle: "Web app",
      img: "/svg/three.svg",
    },
    {
      id: 4,
      title: "Sitemark-Admin",
      subtitle: "Web app",
      img: "/svg/four.svg",
    },
    { id: 4, title: "Add product", subtitle: "Web app", img: "/svg/five.svg" },
  ];
  const [selected, setSelected] = useState(products[0]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid size={2}>
          <div className="flex p-3.5 pl-4 gap-2 bg-[#FFFFFF] border-r border-b dark:bg-[#121519] border-gray-300 dark:border-gray-800 items-center">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="none"
              >
                <path
                  fill="#0073E6"
                  fillRule="evenodd"
                  d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z"
                  clipRule="evenodd"
                />
              </svg>
            </SvgIcon>
            <p className="text-[#256BD6] font-semibold"> Material UI</p>
          </div>
        </Grid>
        <Grid size={10}>
          <div className="flex justify-end items-center gap-4 bg-white p-1.75 border-b dark:bg-[#121519] border-gray-300 dark:border-gray-800">
            <div className="border-r flex gap-2  pr-4 border-gray-300 dark:border-gray-800">
              <div className="bg-[#F6F7F8] px-0.5 rounded-lg border border-gray-300 dark:border-gray-800 dark:bg-[#121519]">
                <SvgIcon>
                  <Bolt sx={{ color: "#256BD6" }} />
                </SvgIcon>
              </div>
              <div className="bg-[#F6F7F8]  px-0.5 rounded-lg border border-gray-300 dark:border-gray-800 dark:bg-[#121519]">
                <SvgIcon>
                  <ViewInAr sx={{ color: "#256BD6" }} />
                </SvgIcon>
              </div>
            </div>

            <FormControl size="small" sx={{ minWidth: 50 }}>
              <Select
                className="border border-white dark:border-gray-800"
                sx={{
                  fontSize: "13px",
                  borderRadius: "12px",
                  "& .MuiSelect-icon": { color: "#000" },
                  ".dark & .MuiSelect-icon": { color: "#256BD6" },
                }}
                value={color}
                onChange={handleChange}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: "#fff",
                      color: "#000",
                      ".dark &": {
                        backgroundColor: "#121519",
                        color: "#256BD6",
                      },
                    },
                  },
                }}
                displayEmpty
              >
                <MenuItem value="">
                  <em className="text-black dark:text-[#256BD6] ">
                    Custom Theme
                  </em>
                </MenuItem>
                <MenuItem value={10}>
                  <em className="text-black dark:text-[#256BD6]">
                    Material Theme
                  </em>
                </MenuItem>
              </Select>
            </FormControl>
            <div
              onClick={() => {
                if (theme === "light") {
                  setTheme("dark");
                } else {
                  setTheme("light");
                }
              }}
              className="bg-[#F6F7F8]  px-0.5 mr-2 rounded-lg border border-gray-300 dark:border-gray-800 dark:bg-[#121519]"
            >
              {theme === "light" ? (
                <SvgIcon>
                  <LightMode fontSize="small" sx={{ color: "#256BD6" }} />
                </SvgIcon>
              ) : (
                <SvgIcon>
                  <DarkMode fontSize="small" sx={{ color: "#256BD6" }} />
                </SvgIcon>
              )}
            </div>
          </div>
        </Grid>
        <Grid size={2}>
          <Box
            onClick={() => {
              if (isShow === false) {
                setIsShow(true);
              } else {
                setIsShow(false);
              }
            }}
            sx={{
              display: "flex ",
              flexDirection: "column",
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingTop:"20px"
             
            }}
          >
            <Paper
              className="flex gap-4"
              elevation={3}
              onClick={() => setSelected(p)}
              sx={{
                padding:"10px",
                width: 220,
                borderRadius: 3,
                border: "2px solid #1976d2",
                justifyContent:"space-around",
                alignItems:"center"
              }}
            >
              <img src={selected.img} alt="" />
              <div className="flex flex-col border-none">
                <Typography fontSize="14px" fontWeight={600}>
                  {selected.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {selected.subtitle}
                </Typography>
              </div>
              <svg
                fill="#000000"
                width="14px"
                height="14px"
                viewBox="0 0 24 24"
                id="triple-down-sign"
                data-name="Line Color"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                <polyline id="primary" points="19 14 12 21 5 14"></polyline>
              </svg>
            </Paper>

            {isShow && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                {products.map((p) => (
                  <Paper
                    className="flex gap-4"
                    key={p.id}
                    onClick={() => setSelected(p)}
                    sx={{
                      padding:"10px",
                width: 220,
                      borderRadius: 3,
                      cursor: "pointer",
                      border:
                        selected.id === p.id
                          ? "2px solid #1976d2"
                          : "1px solid #ddd",
                      transition: "0.2s",
                      "&:hover": { borderColor: "#1976d2" },
                    }}
                  >
                    <img src={p.img} alt="" />
                    <div className="flex flex-col border-none">
                      <Typography fontSize="14px" fontWeight={600}>
                        {p.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {p.subtitle}
                      </Typography>
                    </div>
                  </Paper>
                ))}
              </Box>
            )}
          </Box>
        </Grid>
        <Grid size={10}>main</Grid>
      </Grid>
    </Box>
  );
}
