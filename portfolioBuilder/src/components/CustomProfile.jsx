import { Button, Flex, Grid, Heading, Input, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Image, Box } from "@chakra-ui/react";
const CustomProfile = () => {
  const [name, setName] = useState("Mason parker");
  const [designation, setdeignation] = useState("Graphics & UI/UX Designer");
  const [location, setlocation] = useState(" Denver , United States");
  const [Bio, setBio] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure labore, culpa praesentium neque molestias debitis earum totam repellat incidunt adipisci eaque repellendus sed accusantium itaque, rem voluptatibus in optio officiis.nis fugiat praesentium voluptatum culpa, ullam mollitia rerum adipisci sint quam earum. Dolorum quae corporis molestiae molestias ullam consectetur perferendis natus corrupti repellat cum! Corporis?Aliquid laboriosam ullam ea delectus optio culpa fuga enim ipsum similique. Atque esse natus velit iure iste quam exercitationem commodi, sedaliquam nostrum quis ullam quidem minus molestias totam.Asperiores iste nisi numquam minima enim, delectus sed beatae provident, ad ab nostrum iure vero! Aliquam excepturi deserunt culpa iusto, consequatur facilis ullam distinctio soluta odio, quos, nulla atque nemo."
  );
  const [backgroundColore, setBackgroundColor] = useState("#ffffff");
  const [foregroundColore, setForegroundColor] = useState("#000000");
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storeddesignation = localStorage.getItem("designation");
    const storedlocation = localStorage.getItem("location");
    const storedbio = localStorage.getItem("bio");
    const storedBackground = localStorage.getItem("background");
    const storedForeground = localStorage.getItem("foreground");
    if (storedName) {
      setName(storedName);
    }
    if (storeddesignation) {
      setdeignation(storeddesignation);
    }
    if (storedlocation) {
      setlocation(storedlocation);
    }
    if (storedbio) {
      setBio(storedbio);
    }
    if (storedBackground) {
      setBackgroundColor(storedBackground);
    }
    if (storedForeground) {
      setForegroundColor(storedForeground);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("designation", designation);
    localStorage.setItem("location", location);
    localStorage.setItem("bio", Bio);
    localStorage.setItem("background", backgroundColore);
    localStorage.setItem("foreground", foregroundColore);
  };

  const colorss = [
    "#F7FAFC",
    "#1A202C",
    "#6677cd",
    "#ffffff",
    "#e1fe22",
    "#4163e2",
    "#6d2748",
    "#5be9a2",
    "#e9dae1",
  ];

  const LinerGradient = [
    "(to bottom right, #cfc8c8, yellow)",
    "(to bottom right, #d3aeae, #930ed1)",
    "(to bottom right, #056c29, yellow)",
    "(to bottom right, #2427dd, #b1b182)",
    "(to bottom right, #e30707, #f7f7cf)",
    "(to bottom right, #cfc8c8, #22f097)",
    "(to bottom right, #cfc8c8, #073722)",
    "(to bottom right, #fd4646, #b7b2dd)",
    "(to bottom right, #cfc8c8, #64bb6a)",
    "(to bottom right, #cfc8c8, #22f097)",
    "(to bottom right, #351ca4, #22f097)",
    "(to bottom right, #cfc8c8, #d53139)",
  ];

  const RadialGradient = [
    "(#FF0000 20%, #1a5d95 20%, green 40%)",
    "(#FF0000 20%, yellow 15%, #b7e4b7 60%)",
    "(red 5%, #e2e2b7 15%, #6379d3 60%)",
    "(red 5%, yellow 15%, #b0d5b0 60%)",
    "(red 5%, yellow 15%, #b0d5b0 60%)",
    "(red 5%, yellow 15%, #b0d5b0 60%)",
    "(red 5%, yellow 15%, #b0d5b0 60%)",
    "(red 5%, yellow 15%, #b0d5b0 60%)",
    "(red 5%, yellow 15%, #5c2770 60%)",
    "(red 5%, yellow 15%, #e17c39 60%)",
    "(red 5%, yellow 15%, #b0d5b0 60%)",
    "(red 5%, #58582c 15%, #b0d5b0 60%)",
    "(red 5%, yellow 15%, #766363 60%)",
  ];

  const ForeGround = ["#FAFCFC", "#000000"];
  const [Linear, setLinearColor] = useState([]);
  const [RadialColor, setRadialColor] = useState([]);

  return (
    <div>
      <Flex
        mb={10}
        justifyContent={"space-between"}
        background={"#eeeeee"}
        p={8}
        alignItems={"center"}
        borderRadius={"16px"}
      >
        <div>
          <Heading>Apply a Skin To Your Profie</Heading>
        </div>
        <Flex gap={4}>
          <Button colorScheme="white" variant="outline">
            Custom
          </Button>
          <Button onClick={handleSave} background={"black"} colorScheme="black">
            Save
          </Button>
        </Flex>
      </Flex>
      <div className="Cards">
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <div>
            <h1 className="Heading">solids</h1>
            <Flex gap={4} flexWrap={"wrap"}>
              {colorss.map((item) => (
                <div
                  onClick={() => setBackgroundColor(item)}
                  style={{ background: `${item}`, padding: "20px" }}
                ></div>
              ))}
            </Flex>
          </div>

          <div className="Linerradient">
            <h1 className="Heading">Liner Gardient</h1>
            <Flex gap={4} flexWrap={"wrap"}>
              {LinerGradient.map((item) => (
                <div
                  onClick={() => setBackgroundColor(`linear-gradient${item}`)}
                  style={{
                    backgroundImage: `linear-gradient${item}`,
                    padding: "20px",
                  }}
                ></div>
              ))}
            </Flex>
          </div>

          <div className="Linerradient">
            <h1 className="Heading">Radial Gardient</h1>
            <Flex gap={4} flexWrap={"wrap"}>
              {RadialGradient.map((item) => (
                <div
                  onClick={() => setBackgroundColor(`radial-gradient${item}`)}
                  style={{
                    backgroundImage: `radial-gradient${item}`,
                    padding: "20px",
                  }}
                ></div>
              ))}
            </Flex>
          </div>

          <div>
            <div className="Linerradient">
              <h1 className="Heading">ForeGround Color</h1>
              <Flex gap={4} flexWrap={"wrap"}>
                {ForeGround.map((item) => (
                  <div
                    onClick={() => setForegroundColor(item)}
                    style={{
                      background: `${item}`,
                      padding: "20px",
                    }}
                  ></div>
                ))}
              </Flex>
            </div>
          </div>
        </div>
        <div style={{ background: backgroundColore, color: foregroundColore }}>
          <Box className="PicMain">
            <Box className="timeline">
              <Box className="Profile-pic">
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Box>
            </Box>
          </Box>
          <form
            action=""
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <Input
                htmlSize={4}
                padding={8}
                type="text"
                size={"lg"}
                fontSize="5xl"
                fontWeight={700}
                value={name}
                border={"none"}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <Input
                htmlSize={4}
                padding={5}
                type="text"
                fontSize="3xl"
                fontWeight={600}
                value={designation}
                border={"none"}
                onChange={(e) => setdeignation(e.target.value)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <Input
                htmlSize={4}
                padding={5}
                type="text"
                fontSize="2xl"
                fontWeight={500}
                value={location}
                border={"none"}
                onChange={(e) => setlocation(e.target.value)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <Textarea
                borderStyle={"dashed"}
                htmlSize={4}
                padding={5}
                type="text"
                size={"sm"}
                fontSize="2xl"
                value={Bio}
                borderWidth={2}
                borderColor={"black"}
                borderRadius={"16px"}
                pt={10}
                resize={"both"}
                height={"300px"}
                onChange={(e) => setBio(e.target.value)}
              />
              <label htmlFor="">Bio :</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomProfile;
