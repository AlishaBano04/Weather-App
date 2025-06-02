import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1672226405717-697c84f48f9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const HOT_URL =
    "https://png.pngtree.com/thumb_back/fw800/background/20240506/pngtree-beach-scene-in-summer-weather-image_15724864.jpg";
  const COLD_URL =
    "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNub3d8ZW58MHx8MHx8fDA%3D";
  ("https://png.pngtree.com/thumb_back/fw800/background/20240717/pngtree-a-rainy-day-with-flowers-and-an-umbrella-image_15997908.jpg");

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}&nbsp;
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <div className="Description">
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}>
                <p>Temperature - {info.temp} &deg;C</p>
                <p>Humidity - {info.humidity}</p>
                <p>Maximum Temperature - {info.maxTemp} &deg;C</p>
                <p>Minimun Temperature - {info.minTemp} &deg;C</p>
                <p>
                  The weather can be described as <i>{info.weather}</i> and
                  Feels Like - {info.feelsLike} &deg;C
                </p>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
