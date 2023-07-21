# RESTFUL API List
## 1. API
### 1.1. API List
| API                                         | Method | Description              |
| ------------------------------------------- | ------ | ------------------------ |
| /api/remote/v1.0/                           | GET    | Get API list             |
| /api/remote/v1.0/devices                    | GET    | Get device list          |
| /api/remote/v1.0/devices/control/[deviceId] | GET    | Get device status        |
| /api/remote/v1.0/devices/control/[deviceId] | POST   | Set device status        |
| /api/remote/v1.0/devices/file/[deviceId]    | GET    | Get device upload status |
| /api/remote/v1.0/devices/file/[deviceId]    | POST   | Set device upload status |

### 1.2. API Example
#### 1.2.1. Get API List
##### Request
```bash
curl -X GET http://ip:port/api/remote/v1.0/
```
##### Response
```json
{
    "api": [
        {
            "api": "/api/remote/v1.0/",
            "method": "GET",
            "description": "Get API list"
        },
        {
            "api": "/api/remote/v1.0/devices",
            "method": "GET",
            "description": "Get device list"
        },
        {
            "api": "/api/remote/v1.0/devices/control/[deviceId]",
            "method": "GET",
            "description": "Get device status"
        },
        {
            "api": "/api/remote/v1.0/devices/control/[deviceId]",
            "method": "POST",
            "description": "Set device status"
        },
        {
            "api": "/api/remote/v1.0/devices/file/[deviceId]",
            "method": "GET",
            "description": "Get device upload status"
        },
        {
            "api": "/api/remote/v1.0/devices/file/[deviceId]",
            "method": "POST",
            "description": "Set device upload status"
        }
    ]
}
```

#### 1.2.2. Get device list
##### Request
```bash
curl -X GET http://ip:port/api/remote/v1.0/devices
```
##### Response
```json
{
    "devices": [
        {
            "deviceId": "1",
            "deviceName": "GPM1",
            "deviceType": "GPM",
            "devicePosNum": 1,
            "devicePos": "L",
            "deviceAirMode": "OFF",
            "deviceIp": "10.10.101.1",
						"devicePowerMode": "On",
        }
        {
            "deviceId": "2",
            "deviceName": "GPM2",
            "deviceType": "GPM",
            "devicePosNum": 2,
            "devicePos": "R",
            "deviceAirMode": "OFF",
            "deviceIp": "10.10.101.2",
						"devicePowerMode": "Off"
        }
        {
            "deviceId": "3",
            "deviceName": "ADE1",
            "deviceType": "ADE",
            "devicePosNum": 1,
            "devicePos": "L",
            "deviceAirMode": "OFF",
            "deviceIp": "10.10.102.1"
        }
        {
            "deviceId": "4",
            "deviceName": "IDU1",
            "deviceType": "IDU",
            "devicePosNum": 1,
            "devicePos": "L",
            "deviceAirMode": "OFF",
            "deviceIp": "10.10.103.1"
        }
    ]
}
```

#### 1.2.3. Get device status
##### Request
```bash
curl -X GET http://ip:port/api/remote/v1.0/devices/control/1
```
##### Response
```json
{
    "deviceId": "1",
    "deviceName": "GPM1",
    "deviceType": "GPM",
    "devicePosNum": 1,
    "devicePos": "L",
    "deviceAirMode": "OFF",
    "deviceIp": "10.10.101.1",
}
```

#### 1.2.4. Set device status
##### Request
```bash
curl -X POST http://ip:port/api/remote/v1.0/devices/control/1 -d '{"deviceAirMode": "ON"}'
```
##### Response
```json
{
    "deviceId": "1",
    "deviceName": "GPM1",
    "deviceType": "GPM",
    "devicePosNum": 1,
    "devicePos": "L",
    "deviceAirMode": "ON",
    "deviceIp": "10.10.101.1"
}
```

#### 1.2.5. Get device upload status
##### Request
```bash
curl -X GET http://ip:port/api/remote/v1.0/devices/file/1
```
##### Response
```json
{
    "deviceId": "1",
    "deviceName": "GPM1",
    "deviceType": "GPM",
    "lastUploadedTimeStamp": "2023-07-03 09:00:00",
    "lastUploadedFile": "GPM1_20230703090000",
    "deviceIp": "10.10.101.1"
}
```

#### 1.2.6. Set device upload status
##### Request

```bash
curl -X POST -H 'Content-Type: application/octet-stream' -H 'X-Auth-Token: 123' --data-binary @/tmp/1.jpg http://localhost:8080/api/v1/devices/file/1
```

##### Response
```json
{
    "deviceId": "1",
    "deviceName": "GPM1",
    "deviceType": "GPM",
    "devicePosNum": 1,
    "devicePos": "L",
    "deviceAirMode": "OFF",
    "lastUploadedTimeStamp": "2023-07-03 09:00:00",
    "lastUploadedFileName": "GPM1_20230703090000",
    "deviceIp": "10.10.101.1"
}
```

A example zip file should be like this:

```
├── test.LSBIN
├── test.LUP
├── test.GAA
├── test.LUH
├── FILES.LUM
├── LOADS.LUM
└── package.json
```
The backend will unzip the file and check the package.json file. Upload the targets according to POST request and package.json content.

In package.json file, it should contain the following information:

```json
{
    "deviceType": "GPM",
    "devicePosNum": 1,
    "devicePos": "L",
    "deviceAirMode": "OFF",
    "uploadedFileName": "test",
}
```
If no control commands are provided before start the device, the default value in package.json will be used.

For different device type, the file structure and package.json will be different. Currently, only GPM is supported.
