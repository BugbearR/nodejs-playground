// const { gateway4async, gateway4sync, gateway6async, gateway6sync } = require("default-gateway");
import { gateway4async, gateway4sync, gateway6async, gateway6sync } from "default-gateway";

gateway4async().then((result) => {
    console.log("gateway4async:", result);
}).catch((error) => {
    console.error("gateway4async:", error);
});

gateway6async().then((result) => {
    console.log("gateway6async:", result);
}).catch((error) => {
    console.error("gateway6async:", error);
});

try {
    console.log("gateway4sync:", gateway4sync());
} catch ( error ) {
    console.error("gateway4sync:", error);
}

try {
    console.log("gateway6sync:", gateway6sync());
} catch ( error ) {
    console.error("gateway6sync:", error);
}
