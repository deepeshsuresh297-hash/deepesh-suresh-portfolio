window.PORTFOLIO_PROJECTS = [
  {
    "id": 1,
    "number": "01",
    "title": "Hand-Gesture Controlled Pick & Place Robot",
    "category": "robotics",
    "categoryLabel": "Robotics & Autonomous Systems",
    "subtitle": "Wearable sensing meets embedded robotic manipulation.",
    "card": "A sensor glove controls an articulated robotic arm through a real hardware-to-software control loop.",
    "status": "Physical prototype",
    "description": "A hand-gesture-controlled robotic manipulator that translates signals from a wearable sensor glove into joint and gripper motion. The build connects input sensing, Arduino firmware, Python coordination and a servo-actuated arm into a functioning pick-and-place system.",
    "challenge": "Traditional teach pendants and fixed sequences can make robotic interaction feel rigid. This project explored a more natural command interface without giving up programmable control.",
    "solution": "A glove-mounted flex sensor captures movement. An Arduino Nano digitizes and maps the readings, a Python layer coordinates actions, and SG90 servos execute the arm and gripper commands.",
    "contributions": [
      "Embedded firmware for sensor acquisition, filtering and PWM mapping",
      "Gesture-to-joint mapping and sensor calibration",
      "Servo mounting, system wiring and hardware integration",
      "System debugging and timing checks"
    ],
    "highlights": [
      "Wearable gesture sensing",
      "Three degrees of freedom with gripper actuation",
      "Physical prototype and recorded demonstration",
      "Reported latency of approximately 120–150 ms"
    ],
    "stack": [
      "Arduino Nano",
      "Embedded C++",
      "Python",
      "Flex sensor",
      "SG90 servo motors",
      "Autodesk Fusion 360",
      "PWM control"
    ],
    "workflow": [
      "Capture hand and finger motion with wearable sensors",
      "Digitize, filter and map sensor readings in embedded firmware",
      "Coordinate gesture commands through a Python control layer",
      "Drive the servo-actuated robot arm and gripper"
    ],
    "results": [
      "Demonstration material shows gesture-triggered pick-and-place motion.",
      "Gripper opening/closing and motion across three DOF are reported.",
      "The supplied presentation reports approximately 120–150 ms response latency."
    ],
    "roadmap": [
      "Add closed-loop joint feedback to improve repeatability",
      "Improve gesture recognition and explore vision-based sensing",
      "Investigate ROS integration and further latency reduction"
    ],
    "stats": [
      [
        "3 DOF",
        "Reported arm motion"
      ],
      [
        "4 × SG90",
        "Micro servos"
      ],
      [
        "120–150 ms",
        "Reported latency"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-01-robot-and-glove.webp",
        "caption": "Integrated robotic arm and wearable glove"
      },
      {
        "src": "assets/images/project-01-wearable-glove.webp",
        "caption": "Flex sensor mounted to the wearable glove"
      },
      {
        "src": "assets/images/project-01-arduino-controller.webp",
        "caption": "Arduino Nano and prototyping connections"
      },
      {
        "src": "assets/images/project-01-robot-gripper.webp",
        "caption": "End-effector detail"
      },
      {
        "src": "assets/images/project-01-servo-closeup.webp",
        "caption": "Servo joint close-up"
      },
      {
        "src": "assets/images/project-01-robot-hero.webp",
        "caption": "Assembled robotic-arm prototype"
      }
    ],
    "featured": true,
    "cover": "assets/images/project-01-cover.webp",
    "video": "assets/videos/project-01.mp4",
    "document": "assets/docs/project-01-presentation.pdf"
  },
  {
    "id": 2,
    "number": "02",
    "title": "Custom 6-DOF Underwater ROV",
    "category": "robotics",
    "categoryLabel": "Robotics & Autonomous Systems",
    "subtitle": "Four rotating vector thrusters. Six-axis maneuverability by design.",
    "card": "Team-developed ROV with custom mechanics, electronics, firmware and underwater control modes.",
    "status": "Team-built prototype",
    "description": "A custom-designed underwater remotely operated vehicle developed by a team across mechanical structure, electronics, embedded firmware and control software. Its distinguishing concept is a four-thruster vectoring architecture designed to provide six degrees of freedom.",
    "challenge": "Conventional multi-axis ROVs can require numerous fixed thrusters, increasing packaging and integration complexity. The project explored a more compact vector-thruster arrangement for low-turbulence water applications.",
    "solution": "Each of four custom vector thrusters can rotate between 0° and 90°. An ESP32-S3 handles embedded control, while a Raspberry Pi 4B supports Ethernet networking and live video streaming. A four-in-one bidirectional ESC provides directional thrust control.",
    "contributions": [
      "Team development of the mechanical structure and custom vector-thruster concept",
      "Integration of custom electronics and embedded firmware",
      "Control software and mode development",
      "Waterproof enclosure design and hardware integration"
    ],
    "highlights": [
      "Four rotating vector thrusters designed for 6-DOF motion",
      "Three operational control modes, including depth hold and stabilization",
      "Raspberry Pi 4B communication and video architecture",
      "Dual O-ring enclosure, waterproof connectors and onboard lighting"
    ],
    "stack": [
      "ESP32-S3",
      "Raspberry Pi 4B",
      "4-in-1 bidirectional ESC",
      "Li-ion battery",
      "FlySky FS-i6",
      "Vector thrusters",
      "Ethernet",
      "Waterproofing"
    ],
    "workflow": [
      "Define a compact underwater vehicle structure and thruster arrangement",
      "Develop embedded electronics, motor control and networking",
      "Integrate depth-hold, stabilization and manual control modes",
      "Assemble and test the underwater prototype"
    ],
    "results": [
      "A physical underwater prototype and demonstration footage were supplied.",
      "The system was designed around a 6-DOF concept using four steerable thrusters.",
      "Potential uses include education, pool research and shallow-water inspection."
    ],
    "roadmap": [
      "Continue refining control behavior and underwater reliability",
      "Expand the sensor and autonomy stack as the platform matures"
    ],
    "stats": [
      [
        "6 DOF",
        "Design target"
      ],
      [
        "4",
        "Vector thrusters"
      ],
      [
        "0°–90°",
        "Thruster rotation"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-02-detail-1.webp",
        "caption": "ROV underwater during recorded testing"
      },
      {
        "src": "assets/images/project-02-detail-2.webp",
        "caption": "Prototype in the test environment"
      }
    ],
    "featured": true,
    "cover": "assets/images/project-02-cover.webp",
    "video": "assets/videos/project-02.mp4",
    "document": null
  },
  {
    "id": 3,
    "number": "03",
    "title": "Pixhawk-Based 4-DOF Underwater ROV",
    "category": "robotics",
    "categoryLabel": "Robotics & Autonomous Systems",
    "subtitle": "A modular ROV prototype tuned for buoyancy, stability and safe operation.",
    "card": "Pixhawk 2.4.8 and ArduSub power a four-thruster underwater platform.",
    "status": "Working prototype",
    "description": "A working underwater ROV inspired by the ArduSub Simple ROV-4 frame architecture. The system combines four-thruster propulsion, Pixhawk-based control, near-neutral buoyancy and onboard leak detection.",
    "challenge": "The objective was to develop an underwater vehicle that behaves predictably while keeping power draw, buoyancy and safety in balance.",
    "solution": "A Pixhawk 2.4.8 running ArduSub controls a custom modular frame with four thrusters. Buoyancy was adjusted toward neutral to minimize unnecessary sustained vertical thrust and improve handling.",
    "contributions": [
      "Custom frame design and mechanical assembly",
      "Buoyancy calculations and balance tuning",
      "Pixhawk/ArduSub configuration and propulsion integration",
      "Power management, waterproofing and leak detection integration"
    ],
    "highlights": [
      "4-DOF / four-thruster architecture",
      "Reported operation of roughly 45–60 minutes, depending on load",
      "Near-neutral buoyancy tuning",
      "Integrated water-leakage sensor"
    ],
    "stack": [
      "Pixhawk 2.4.8",
      "ArduSub",
      "4 thrusters",
      "Water leakage sensor",
      "Buoyancy analysis",
      "Power management"
    ],
    "workflow": [
      "Adapt the Simple ROV-4 architecture into a custom frame",
      "Integrate and configure Pixhawk with ArduSub",
      "Tune buoyancy and check underwater handling",
      "Test power endurance, waterproofing and safety systems"
    ],
    "results": [
      "Working prototype and underwater demonstration shared.",
      "Approximately 45–60 minutes of endurance reported, depending on operating conditions.",
      "Live camera integration and autonomy remain in development."
    ],
    "roadmap": [
      "Integrate a live video feed",
      "Explore sensor- and vision-guided autonomous functions"
    ],
    "stats": [
      [
        "4 DOF",
        "Vehicle motion"
      ],
      [
        "4",
        "Thrusters"
      ],
      [
        "45–60 min",
        "Reported endurance"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-03-detail-1.webp",
        "caption": "ROV in swimming-pool test setting"
      },
      {
        "src": "assets/images/project-03-detail-2.webp",
        "caption": "Additional underwater demonstration still"
      }
    ],
    "featured": true,
    "cover": "assets/images/project-03-cover.webp",
    "video": "assets/videos/project-03.mp4",
    "document": null
  },
  {
    "id": 4,
    "number": "04",
    "title": "Custom F450 Quadcopter",
    "category": "robotics",
    "categoryLabel": "Robotics & Autonomous Systems",
    "subtitle": "From airframe assembly to flight-controller configuration.",
    "card": "An F450 quadcopter built with APM 2.8, brushless motors and Mission Planner.",
    "status": "Built hardware prototype",
    "description": "A custom-assembled quadcopter using an F450 frame, APM 2.8 flight controller, four 1000KV brushless motors, FlySky radio and Mission Planner for configuration and tuning.",
    "challenge": "The project focused on understanding multirotor flight systems at the component level rather than treating the aircraft as a ready-to-fly product.",
    "solution": "The frame, propulsion electronics, receiver and autopilot were integrated into a physical quadcopter. Mission Planner supported controller setup and tuning.",
    "contributions": [
      "Airframe and propulsion assembly",
      "Electrical integration of motors, controller and RC receiver",
      "APM 2.8 setup and Mission Planner configuration",
      "Practical learning in flight dynamics and system tuning"
    ],
    "highlights": [
      "F450 four-motor architecture",
      "APM 2.8 flight controller",
      "1000KV brushless propulsion",
      "Photographs of the completed physical assembly"
    ],
    "stack": [
      "APM 2.8",
      "F450 frame",
      "1000KV BLDC motors",
      "FlySky radio",
      "Mission Planner",
      "ESC integration"
    ],
    "workflow": [
      "Assemble the frame and motors",
      "Integrate the flight controller and radio equipment",
      "Configure flight-controller parameters in Mission Planner",
      "Evaluate opportunities for future autonomous upgrades"
    ],
    "results": [
      "Completed physical quadcopter assembly documented in photographs.",
      "Strengthened practical understanding of drone electronics and flight control."
    ],
    "roadmap": [
      "Develop custom flight-control hardware and firmware",
      "Add GPS waypoint navigation and FPV",
      "Investigate LoRa telemetry and a custom transmitter"
    ],
    "stats": [
      [
        "F450",
        "Airframe"
      ],
      [
        "APM 2.8",
        "Flight controller"
      ],
      [
        "1000KV",
        "Motor rating"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-04-photo-1.webp",
        "caption": "Completed F450 quadcopter viewed from above"
      },
      {
        "src": "assets/images/project-04-photo-2.webp",
        "caption": "Second view of the integrated quadcopter"
      }
    ],
    "featured": true,
    "cover": "assets/images/project-04-cover.webp",
    "video": null,
    "document": null
  },
  {
    "id": 5,
    "number": "05",
    "title": "5-DOF Robotic Arm in SolidWorks",
    "category": "robotics",
    "categoryLabel": "Robotics & Autonomous Systems",
    "subtitle": "A modular robotic manipulator designed from joint to gripper.",
    "card": "Custom mechanical design and assembly-motion study with MG995 and MG90S servos.",
    "status": "CAD design & motion study",
    "description": "A five-degree-of-freedom robotic arm designed in SolidWorks, including its base, links, joints, and mechanical gripper. MG995 servos are specified for major joints, with MG90S micro servos intended for lighter wrist and end-effector movements.",
    "challenge": "The aim was to develop a compact, modular manipulator with realistic mounting interfaces and joint motion relationships suitable for later fabrication and electronics integration.",
    "solution": "The arm was modeled component by component, assembled using mechanical mates, and motion-tested digitally to examine joint behavior and overall reach.",
    "contributions": [
      "Custom CAD modeling of mechanical components and joints",
      "Modular assembly with alignment and motion constraints",
      "MG995/MG90S servo integration considerations",
      "Gripper design and whole-arm motion study"
    ],
    "highlights": [
      "Five-degree-of-freedom arm configuration",
      "Detailed end-effector and joint assembly",
      "Motion-tested SolidWorks model",
      "Concept prepared for future electronics and control"
    ],
    "stack": [
      "SolidWorks",
      "MG995 servo",
      "MG90S servo",
      "Mechanical mates",
      "3D CAD",
      "Motion study"
    ],
    "workflow": [
      "Design the base, arm segments and gripper",
      "Position servos and incorporate mechanical interfaces",
      "Assemble components using suitable constraints",
      "Assess digital joint motion and revise the design"
    ],
    "results": [
      "Eight original CAD screenshots document the full assembly and individual parts.",
      "Project remains a digital design and simulation study; fabrication is future work."
    ],
    "roadmap": [
      "Integrate ESP32 or Arduino motion control",
      "Develop a GUI or mobile control interface",
      "Prototype and validate the mechanism on physical hardware"
    ],
    "stats": [
      [
        "5 DOF",
        "Design configuration"
      ],
      [
        "MG995",
        "Major joints"
      ],
      [
        "MG90S",
        "Precision joints"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-05-photo-1.webp",
        "caption": "Full robotic arm CAD assembly"
      },
      {
        "src": "assets/images/project-05-photo-2.webp",
        "caption": "Alternative view of the articulated arm"
      },
      {
        "src": "assets/images/project-05-photo-3.webp",
        "caption": "Base geometry"
      },
      {
        "src": "assets/images/project-05-photo-4.webp",
        "caption": "Joint component detail"
      },
      {
        "src": "assets/images/project-05-photo-5.webp",
        "caption": "Arm link geometry"
      },
      {
        "src": "assets/images/project-05-photo-6.webp",
        "caption": "Servo housing and connection"
      },
      {
        "src": "assets/images/project-05-photo-7.webp",
        "caption": "Actuator detail"
      },
      {
        "src": "assets/images/project-05-photo-8.webp",
        "caption": "Gripper mechanism and gearing"
      }
    ],
    "featured": true,
    "cover": "assets/images/project-05-cover.webp",
    "video": null,
    "document": null
  },
  {
    "id": 6,
    "number": "06",
    "title": "Smart IoT Water Monitoring & Control",
    "category": "iot",
    "categoryLabel": "Embedded Systems & IoT",
    "subtitle": "One connected system for sensing, display, and remote actuation.",
    "card": "ESP32, custom PCB layout, Android app, flow sensing and LCD feedback.",
    "status": "Integrated hardware prototype",
    "description": "An ESP32-based water-monitoring and motor-control system that provides live measurements locally on a 16×2 LCD and remotely through a custom Android application built using Java and Android Studio.",
    "challenge": "Water systems can be difficult to monitor or control from a single interface. This project combined physical buttons, local status feedback and wireless access without making the mobile app the only way to operate the system.",
    "solution": "The ESP32 reads water-system sensors, manages local inputs and communicates through Wi-Fi with the Android app. A PCB layout was developed in Altium Designer, and the physical electronics were prototyped and tested with a flow circuit.",
    "contributions": [
      "First PCB layout designed in Altium Designer",
      "ESP32 sensor, button and LCD integration",
      "Android app implementation in Java",
      "Wi-Fi communication and real-time water-system testing"
    ],
    "highlights": [
      "Local LCD and mobile application monitoring",
      "Water level, flow rate, volume and motor control information",
      "Physical buttons alongside app controls",
      "Photographs of PCB design, soldering and test setup"
    ],
    "stack": [
      "ESP32",
      "Altium Designer",
      "Java",
      "Android Studio",
      "Wi-Fi",
      "16×2 LCD",
      "Water flow sensor",
      "Physical controls"
    ],
    "workflow": [
      "Design control interfaces and PCB routing",
      "Prototype soldered electronics and sensor connections",
      "Build the Android control interface",
      "Exchange data through Wi-Fi and test the water flow setup"
    ],
    "results": [
      "A complete prototype circuit, LCD and water-flow setup are documented.",
      "The project marked a first PCB-design milestone.",
      "User-described monitoring covers level, flow, volume and motor speed."
    ],
    "roadmap": [
      "Refine PCB fabrication and packaging",
      "Expand measurement calibration and logging"
    ],
    "stats": [
      [
        "ESP32",
        "Embedded platform"
      ],
      [
        "16 × 2",
        "LCD display"
      ],
      [
        "Wi-Fi",
        "Remote control"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-06-photo-1.webp",
        "caption": "Physical water-flow system with sensor and electronics"
      },
      {
        "src": "assets/images/project-06-photo-2.webp",
        "caption": "Wired ESP32-based prototype"
      },
      {
        "src": "assets/images/project-06-photo-3.webp",
        "caption": "LCD output during testing"
      },
      {
        "src": "assets/images/project-06-photo-4.webp",
        "caption": "Soldered prototyping-board underside"
      },
      {
        "src": "assets/images/project-06-photo-5.webp",
        "caption": "Board layout / 3D view"
      },
      {
        "src": "assets/images/project-06-photo-6.webp",
        "caption": "PCB routing view"
      }
    ],
    "featured": true,
    "cover": "assets/images/project-06-cover.webp",
    "video": null,
    "document": null
  },
  {
    "id": 7,
    "number": "07",
    "title": "Geneva Mechanism",
    "category": "cad",
    "categoryLabel": "Mechanical CAD & Kinematics",
    "subtitle": "Continuous rotation converted into precise intermittent indexing.",
    "card": "Motion-constrained CAD assembly and animation in Autodesk Fusion.",
    "status": "CAD design & animation",
    "description": "A digital model of a Geneva indexing mechanism created in Autodesk Fusion. The project explores how a continuously rotating drive component periodically advances an output wheel.",
    "challenge": "The design exercise focused on generating reliable intermittent motion using geometry and assembly constraints.",
    "solution": "The components were modeled and assembled with mechanical relationships that demonstrate the indexing action in an animated CAD study.",
    "contributions": [
      "3D part design and assembly",
      "Mechanism constraints",
      "Intermittent-motion simulation",
      "Understanding motion sequencing"
    ],
    "highlights": [
      "Geneva-style intermittent indexing",
      "Animated CAD demonstration",
      "Constraint-aware mechanical assembly"
    ],
    "stack": [
      "Autodesk Fusion",
      "Kinematic simulation",
      "CAD assembly",
      "Mechanical linkages"
    ],
    "workflow": [
      "Model the driving and indexing parts",
      "Constrain the assembled geometry",
      "Animate one complete indexing cycle"
    ],
    "results": [
      "A working digital animation of the mechanism was supplied."
    ],
    "roadmap": [],
    "stats": [
      [
        "CAD",
        "Digital model"
      ],
      [
        "Indexing",
        "Intermittent motion"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-07-detail-1.webp",
        "caption": "Drive component approaching engagement"
      },
      {
        "src": "assets/images/project-07-detail-2.webp",
        "caption": "CAD study showing another motion position"
      }
    ],
    "featured": false,
    "cover": "assets/images/project-07-cover.webp",
    "video": "assets/videos/project-07.mp4",
    "document": null
  },
  {
    "id": 8,
    "number": "08",
    "title": "Wheel Mechanism",
    "category": "cad",
    "categoryLabel": "Mechanical CAD & Kinematics",
    "subtitle": "Precision component alignment and rotational assembly relationships.",
    "card": "Fusion 360 model studying wheel assembly geometry and motion.",
    "status": "CAD design & assembly",
    "description": "A wheel mechanism designed and assembled in Autodesk Fusion 360 to practice accurate component relationships, alignment and rotational mechanical motion.",
    "challenge": "The focus was to move beyond individual parts into a mechanically consistent digital assembly.",
    "solution": "Individual components were modeled, positioned and constrained within a wheel-based assembly, then demonstrated in the Fusion environment.",
    "contributions": [
      "Part modeling and alignment",
      "Assembly relationships and constraints",
      "Rotational motion concepts",
      "Precision CAD techniques"
    ],
    "highlights": [
      "Completed digital assembly",
      "Recorded CAD demonstration",
      "Applications in transport and industrial machinery"
    ],
    "stack": [
      "Autodesk Fusion 360",
      "CAD modeling",
      "Assembly constraints",
      "Mechanical motion"
    ],
    "workflow": [
      "Create component geometry",
      "Position and align the wheel components",
      "Apply assembly constraints",
      "Inspect the assembled model and its motion behavior"
    ],
    "results": [
      "Recorded Fusion 360 assembly demonstration was supplied."
    ],
    "roadmap": [],
    "stats": [
      [
        "CAD",
        "Digital assembly"
      ],
      [
        "Motion",
        "Rotational study"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-08-detail-1.webp",
        "caption": "Wheel mechanism assembly view"
      },
      {
        "src": "assets/images/project-08-detail-2.webp",
        "caption": "Another position in the Fusion study"
      }
    ],
    "featured": false,
    "cover": "assets/images/project-08-cover.webp",
    "video": "assets/videos/project-08.mp4",
    "document": null
  },
  {
    "id": 9,
    "number": "09",
    "title": "Trammel of Archimedes",
    "category": "cad",
    "categoryLabel": "Mechanical CAD & Kinematics",
    "subtitle": "Two orthogonal sliders trace an ellipse.",
    "card": "A classic constrained-motion linkage modeled and animated in Fusion 360.",
    "status": "CAD design & animation",
    "description": "A Trammel of Archimedes mechanism designed and assembled digitally. Two sliders move along perpendicular guides while an attached link traces an elliptical path.",
    "challenge": "The project explored how the geometric constraints of sliders and links generate repeatable motion without an electronically controlled actuator.",
    "solution": "Components were modeled and connected with appropriate sliding and linkage constraints, followed by an animation of their kinematic behavior.",
    "contributions": [
      "Slider and linkage CAD design",
      "Perpendicular guide constraints",
      "Elliptical-motion kinematics",
      "Mechanism animation"
    ],
    "highlights": [
      "Orthogonal sliding motion",
      "Elliptical trajectory by constrained linkage",
      "Demonstrated in a Fusion 360 animation"
    ],
    "stack": [
      "Autodesk Fusion 360",
      "Mechanical linkages",
      "Assembly joints",
      "Kinematics"
    ],
    "workflow": [
      "Model the guide, sliders and connecting bar",
      "Constrain perpendicular slider travel",
      "Animate the mechanism and study its generated path"
    ],
    "results": [
      "The complete digital mechanism and its movement are demonstrated in the supplied video."
    ],
    "roadmap": [],
    "stats": [
      [
        "2",
        "Perpendicular sliders"
      ],
      [
        "Ellipse",
        "Generated path"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-09-detail-1.webp",
        "caption": "CAD mechanism at one slider position"
      },
      {
        "src": "assets/images/project-09-detail-2.webp",
        "caption": "CAD mechanism during animated movement"
      }
    ],
    "featured": false,
    "cover": "assets/images/project-09-cover.webp",
    "video": "assets/videos/project-09.mp4",
    "document": null
  },
  {
    "id": 10,
    "number": "10",
    "title": "Scotch Yoke Mechanism",
    "category": "cad",
    "categoryLabel": "Mechanical CAD & Kinematics",
    "subtitle": "An elegant conversion from rotary to reciprocating linear motion.",
    "card": "Fusion 360 assembly with joint constraints, limits and working animation.",
    "status": "CAD design & animation",
    "description": "A Scotch Yoke mechanism modeled in Autodesk Fusion 360 to demonstrate the conversion of constant rotary input into reciprocating linear displacement.",
    "challenge": "The project aimed to understand the mechanical relationships between a rotating crank, driving pin and translating yoke.",
    "solution": "After modeling each component, the mechanism was assembled using suitable joints and motion limits, then tested through a working digital animation.",
    "contributions": [
      "Part and assembly modeling",
      "Joint selection and motion limits",
      "Rotation-to-translation motion study",
      "Animation and assembly verification"
    ],
    "highlights": [
      "Rotary-to-linear motion conversion",
      "Completed mechanism animation",
      "Motion-constrained CAD assembly"
    ],
    "stack": [
      "Autodesk Fusion 360",
      "Mechanism design",
      "Motion joints",
      "3D CAD"
    ],
    "workflow": [
      "Model the rotating drive and sliding yoke",
      "Apply the mechanical joints and limits",
      "Animate input rotation",
      "Inspect reciprocating output movement"
    ],
    "results": [
      "The recorded animation demonstrates the intended constrained motion."
    ],
    "roadmap": [],
    "stats": [
      [
        "Rotary → linear",
        "Motion conversion"
      ],
      [
        "CAD",
        "Animated assembly"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-10-detail-1.webp",
        "caption": "Scotch Yoke in a modeled position"
      },
      {
        "src": "assets/images/project-10-detail-2.webp",
        "caption": "Second yoke position during animation"
      }
    ],
    "featured": false,
    "cover": "assets/images/project-10-cover.webp",
    "video": "assets/videos/project-10.mp4",
    "document": null
  },
  {
    "id": 11,
    "number": "11",
    "title": "Smartphone Motion-Controlled Python Game",
    "category": "vision",
    "categoryLabel": "Computer Vision & HCI",
    "subtitle": "Your phone becomes a wireless input device.",
    "card": "Gyroscope/accelerometer data streams to a custom desktop slicing game.",
    "status": "Interactive prototype",
    "description": "A Fruit Ninja-style Python game controlled by physical phone movement rather than a mouse. Smartphone inertial readings travel across a local network and are mapped to a virtual blade position.",
    "challenge": "The project explored how consumer sensor data can serve as a responsive control channel for interactive desktop software.",
    "solution": "A mobile application captures accelerometer and gyroscope data. Socket/WebSocket-style streaming sends readings to a laptop where a Python program translates motion into on-screen coordinates.",
    "contributions": [
      "Mobile motion-sensor capture",
      "Low-latency local-network data streaming",
      "Sensor-angle to screen-position mapping",
      "Interactive Python game development"
    ],
    "highlights": [
      "Smartphone-to-desktop control",
      "Real-time motion-driven fruit slicing",
      "Live demonstration recording"
    ],
    "stack": [
      "Python",
      "Smartphone IMU",
      "Gyroscope",
      "Accelerometer",
      "WebSockets / sockets",
      "Real-time mapping"
    ],
    "workflow": [
      "Read smartphone motion data",
      "Stream the measurements over the local network",
      "Map incoming angles to blade movement",
      "Render game interactions in Python"
    ],
    "results": [
      "Demonstration shows the phone acting as an input controller for gameplay."
    ],
    "roadmap": [],
    "stats": [
      [
        "IMU",
        "Motion input"
      ],
      [
        "LAN",
        "Communication"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-11-detail-1.webp",
        "caption": "Smartphone in front of Python game"
      },
      {
        "src": "assets/images/project-11-detail-2.webp",
        "caption": "Another moment of motion-controlled gameplay"
      }
    ],
    "featured": false,
    "cover": "assets/images/project-11-cover.webp",
    "video": "assets/videos/project-11.mp4",
    "document": null
  },
  {
    "id": 12,
    "number": "12",
    "title": "AI Train Obstacle Detection & Safety System",
    "category": "vision",
    "categoryLabel": "Computer Vision & HCI",
    "subtitle": "Real-time track-area analysis and early-warning logic.",
    "card": "Capstone computer-vision application for railway hazard awareness.",
    "status": "Capstone software prototype",
    "description": "A computer vision application intended to assist locomotive operators by identifying objects in or near the rail path and presenting a tiered hazard warning.",
    "challenge": "Objects visible from a train are not equally dangerous. The challenge was to prioritize potential track obstructions by combining object detection with the track region and proximity logic.",
    "solution": "A dynamic track region of interest identifies the active rail corridor. Multi-class detection locates hazards such as logs, vehicles and animals, while relative location and distance rules categorize warning severity.",
    "contributions": [
      "Track ROI identification and visual segmentation",
      "Multi-class obstacle-detection integration",
      "Relative position and proximity logic",
      "Real-time warning-state visualization"
    ],
    "highlights": [
      "Three warning levels",
      "Object detection for track hazards",
      "Dynamic track ROI overlay",
      "Recorded application demonstration"
    ],
    "stack": [
      "Deep learning",
      "Computer vision",
      "Object detection",
      "ROI segmentation",
      "Spatial tracking",
      "Threat classification"
    ],
    "workflow": [
      "Identify the active track region",
      "Detect objects in and near the scene",
      "Evaluate location and proximity relative to the route",
      "Present clear, warning or danger indicators"
    ],
    "results": [
      "Demonstrated as a prototype computer-vision safety assistant.",
      "No railway-certified safety validation is claimed."
    ],
    "roadmap": [
      "Evaluate detection accuracy with representative real-world data",
      "Test adverse weather and lighting conditions"
    ],
    "stats": [
      [
        "3",
        "Warning states"
      ],
      [
        "Real-time",
        "Video analysis"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-12-detail-1.webp",
        "caption": "Railway view with detection and ROI overlay"
      },
      {
        "src": "assets/images/project-12-detail-2.webp",
        "caption": "Railway scene analyzed by the application"
      }
    ],
    "featured": true,
    "cover": "assets/images/project-12-cover.webp",
    "video": "assets/videos/project-12.mp4",
    "document": null
  },
  {
    "id": 13,
    "number": "13",
    "title": "Ring Runner: Hand-Controlled Space Game",
    "category": "vision",
    "categoryLabel": "Computer Vision & HCI",
    "subtitle": "Pilot a virtual spaceship with natural hand movements.",
    "card": "Touchless browser game integrating hand tracking and responsive web graphics.",
    "status": "Interactive web prototype",
    "description": "A browser-based space game where camera-tracked hand motions steer a spaceship through an asteroid environment, eliminating the need for keyboard or mouse navigation.",
    "challenge": "The project tested whether hand tracking can translate comfortably into precise, low-latency game controls.",
    "solution": "Computer vision provides hand coordinates and orientation variations, including pitch and roll. These values are mapped to on-screen spacecraft movement while the web environment handles rendering and collisions.",
    "contributions": [
      "Real-time hand-position and orientation capture",
      "Gesture-to-game control mapping",
      "Web-based space graphics and collision handling",
      "Responsive interaction tuning"
    ],
    "highlights": [
      "Touchless spaceship steering",
      "Asteroid avoidance and collision detection",
      "Live camera-to-web interaction demonstration"
    ],
    "stack": [
      "Computer vision",
      "Hand tracking",
      "Web graphics",
      "JavaScript / browser UI",
      "Gesture mapping"
    ],
    "workflow": [
      "Track hand coordinates and orientation",
      "Convert spatial motion into navigation offsets",
      "Update spaceship position in real time",
      "Render asteroids and resolve collisions"
    ],
    "results": [
      "Demo footage shows hand movement controlling the browser-based spacecraft."
    ],
    "roadmap": [],
    "stats": [
      [
        "HCI",
        "Touchless input"
      ],
      [
        "Web",
        "Interactive graphics"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-13-detail-1.webp",
        "caption": "Hand gestures guiding a virtual spaceship"
      },
      {
        "src": "assets/images/project-13-detail-2.webp",
        "caption": "Space game and camera-based interaction"
      }
    ],
    "featured": false,
    "cover": "assets/images/project-13-cover.webp",
    "video": "assets/videos/project-13.mp4",
    "document": null
  },
  {
    "id": 14,
    "number": "14",
    "title": "Python Gesture-Controlled Game Interface",
    "category": "vision",
    "categoryLabel": "Computer Vision & HCI",
    "subtitle": "Camera-based hand positions become digital control commands.",
    "card": "OpenCV and MediaPipe connected to custom real-time input mapping.",
    "status": "HCI software prototype",
    "description": "A Python-based gesture interface that recognizes live hand movement and converts spatial positioning into digital game-control commands.",
    "challenge": "Traditional controls rely on physical peripherals. This experiment explores accessible, touchless input based on tracked gestures.",
    "solution": "OpenCV captures video and MediaPipe extracts hand landmarks. Custom logic interprets landmark positions and produces game-directed control signals.",
    "contributions": [
      "OpenCV / MediaPipe pipeline integration",
      "Hand-landmark and movement interpretation",
      "Gesture-to-input mapping logic",
      "Real-time interaction and demo testing"
    ],
    "highlights": [
      "Hands-free control demonstration",
      "Landmark-based spatial mapping",
      "Custom Python processing pipeline"
    ],
    "stack": [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Hand tracking",
      "Real-time processing",
      "HCI"
    ],
    "workflow": [
      "Capture live camera frames",
      "Extract hand landmarks using MediaPipe",
      "Translate spatial position into control commands",
      "Apply commands to an interactive game"
    ],
    "results": [
      "Prototype demonstration showing gesture-driven game inputs was supplied."
    ],
    "roadmap": [],
    "stats": [
      [
        "Python",
        "Application"
      ],
      [
        "HCI",
        "Gesture interface"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-14-detail-1.webp",
        "caption": "Webcam gesture-input demonstration"
      },
      {
        "src": "assets/images/project-14-detail-2.webp",
        "caption": "Hand movement mapped to the game"
      }
    ],
    "featured": false,
    "cover": "assets/images/project-14-cover.webp",
    "video": "assets/videos/project-14.mp4",
    "document": null
  },
  {
    "id": 15,
    "number": "15",
    "title": "NeuroPlay: AI Web Arcade",
    "category": "software",
    "categoryLabel": "AI & Software Engineering",
    "subtitle": "Three games. Three decision engines. One cohesive browser platform.",
    "card": "Vanilla HTML, CSS and JavaScript with search-based and game-theoretic AI.",
    "status": "Interactive web application",
    "description": "A multi-game web arcade built from scratch using standard browser technologies. Each game uses its own deterministic logic and AI strategy while sharing a consistent interface.",
    "challenge": "The engineering challenge was to implement meaningful game intelligence and reusable frontend behavior without external frameworks.",
    "solution": "Connect 4 uses Minimax with Alpha-Beta Pruning, Pop It uses a misère game strategy, and Dots & Boxes evaluates game states with risk-aware move selection.",
    "contributions": [
      "Minimax and Alpha-Beta Pruning implementation",
      "Misère game-theory move logic",
      "Dots & Boxes state and risk evaluation",
      "Modular HTML/CSS/JavaScript interface",
      "Programmatically generated custom sounds using Python"
    ],
    "highlights": [
      "Three independent interactive games",
      "Difficulty scaling based on search depth",
      "No frontend frameworks or external libraries",
      "Consistent real-time state updates"
    ],
    "stack": [
      "HTML",
      "CSS",
      "Vanilla JavaScript",
      "Minimax",
      "Alpha-Beta Pruning",
      "Game theory",
      "Python audio generation"
    ],
    "workflow": [
      "Build reusable interface and deterministic state management",
      "Implement each game’s rule engine",
      "Add algorithmic opponents and difficulty selection",
      "Connect rendering, events and custom sound"
    ],
    "results": [
      "Recorded demo shows the multi-game arcade and its interfaces.",
      "AI here refers to algorithmic search and game-theory logic, not model training."
    ],
    "roadmap": [],
    "stats": [
      [
        "3",
        "Game engines"
      ],
      [
        "0",
        "Frontend frameworks"
      ],
      [
        "AI",
        "Algorithmic decisions"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-15-detail-1.webp",
        "caption": "Connect 4 AI gameplay screen"
      },
      {
        "src": "assets/images/project-15-detail-2.webp",
        "caption": "Dots & Boxes game interface"
      }
    ],
    "featured": true,
    "cover": "assets/images/project-15-cover.webp",
    "video": "assets/videos/project-15.mp4",
    "document": null
  },
  {
    "id": 16,
    "number": "16",
    "title": "Pose-Controlled Subway Surfers",
    "category": "vision",
    "categoryLabel": "Computer Vision & HCI",
    "subtitle": "Lean, crouch and raise your hands to play.",
    "card": "Webcam body tracking translated into touchless Subway Surfers inputs.",
    "status": "Computer vision prototype",
    "description": "A full-body motion controller that uses camera-based pose tracking to drive Subway Surfers through natural movements, with a live overlay showing the detected person.",
    "challenge": "The goal was to explore body-language commands as a replacement for conventional physical game controls.",
    "solution": "The system interprets tracked body position and movement to trigger lane switching, jumping and rolling actions.",
    "contributions": [
      "Real-time pose-tracking integration",
      "Body gesture detection and classification",
      "Mapping body gestures into game inputs",
      "Live camera overlay and responsiveness testing"
    ],
    "highlights": [
      "Raise hands to jump",
      "Lean left/right to change lanes",
      "Crouch to roll",
      "Live body-tracking visualization"
    ],
    "stack": [
      "Computer vision",
      "Pose estimation",
      "Gesture recognition",
      "Human-computer interaction"
    ],
    "workflow": [
      "Capture and track full-body pose",
      "Detect gestures from body positions",
      "Map gestures into game-control signals",
      "Overlay tracking feedback while the game runs"
    ],
    "results": [
      "Demonstration video illustrates touchless body-based gameplay."
    ],
    "roadmap": [],
    "stats": [
      [
        "3",
        "Gesture mappings"
      ],
      [
        "Full body",
        "Pose tracking"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-16-detail-1.webp",
        "caption": "Live full-body camera overlay beside game"
      },
      {
        "src": "assets/images/project-16-detail-2.webp",
        "caption": "Subway Surfers controlled with body movements"
      }
    ],
    "featured": false,
    "cover": "assets/images/project-16-cover.webp",
    "video": "assets/videos/project-16.mp4",
    "document": null
  },
  {
    "id": 17,
    "number": "17",
    "title": "Meta Ads Performance Dashboard",
    "category": "data",
    "categoryLabel": "Data Analytics & BI",
    "subtitle": "Turn social advertising data into actionable campaign insights.",
    "card": "Power BI reporting for campaigns, audiences, conversions and creative formats.",
    "status": "Business intelligence dashboard",
    "description": "An interactive Power BI dashboard analyzing Facebook and Instagram advertising performance across engagement, conversion, audience characteristics, geography, time and creative types.",
    "challenge": "Campaign metrics are most valuable when they can be compared across audience groups, formats and time periods rather than reviewed in isolation.",
    "solution": "Campaign data was cleaned and transformed, measures were built with DAX, and interconnected Power BI visuals were used to explore performance drivers.",
    "contributions": [
      "Data cleaning and transformation",
      "DAX measures for marketing KPIs",
      "Interactive Power BI report design",
      "Audience, geographic and temporal segmentation"
    ],
    "highlights": [
      "Impressions, clicks, purchases and engagement tracking",
      "CTR, purchase and conversion rates",
      "Gender, age-group and country filters",
      "Weekly/hourly trends and creative-format comparison"
    ],
    "stack": [
      "Power BI",
      "DAX",
      "Data transformation",
      "Marketing analytics",
      "Data visualization"
    ],
    "workflow": [
      "Prepare campaign tables and related fields",
      "Define KPI calculations in DAX",
      "Design charts for audience, time and geography",
      "Enable filtering and cross-report comparison"
    ],
    "results": [
      "Interactive dashboard demonstrated in a recorded walkthrough."
    ],
    "roadmap": [],
    "stats": [
      [
        "CTR",
        "Campaign KPI"
      ],
      [
        "DAX",
        "Measures"
      ],
      [
        "Meta Ads",
        "Data domain"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-17-detail-1.webp",
        "caption": "Meta advertising dashboard overview"
      },
      {
        "src": "assets/images/project-17-detail-2.webp",
        "caption": "Interactive charts and campaign metrics"
      }
    ],
    "featured": false,
    "cover": "assets/images/project-17-cover.webp",
    "video": "assets/videos/project-17.mp4",
    "document": null
  },
  {
    "id": 18,
    "number": "18",
    "title": "IPL Cricket Analytics Dashboard: 2008–2025",
    "category": "data",
    "categoryLabel": "Data Analytics & BI",
    "subtitle": "Eighteen seasons of cricket explored through interactive BI.",
    "card": "Power BI analysis of teams, players, batting, bowling and season statistics.",
    "status": "Business intelligence dashboard",
    "description": "An interactive Power BI analysis of the Indian Premier League spanning 2008–2025. The dashboard brings together match summaries, team performance, player statistics and season-level comparisons.",
    "challenge": "Cricket records across seasons and teams are difficult to compare through raw tables alone. The dashboard structures those records into accessible, filterable insights.",
    "solution": "Match and player data were cleaned and transformed; DAX measures drive interactive visuals for total matches, boundaries, centuries, team results and individual player comparisons.",
    "contributions": [
      "Cleaning and structuring cricket datasets",
      "Developing DAX measures for player and team statistics",
      "Season-wise filtering across 2008–2025",
      "Designing an interactive Power BI experience"
    ],
    "highlights": [
      "Overview of matches, sixes, fours and centuries",
      "Orange Cap and Purple Cap insights",
      "Team-wise performance comparisons",
      "Season and player-level exploration"
    ],
    "stack": [
      "Power BI",
      "DAX",
      "Data cleaning",
      "Data transformation",
      "Data visualization",
      "Sports analytics"
    ],
    "workflow": [
      "Transform match and player data into report tables",
      "Create summary measures in DAX",
      "Build season and team filters",
      "Visualize batting, bowling and award insights"
    ],
    "results": [
      "A dashboard demonstration video was supplied.",
      "The report covers IPL seasons from 2008 through 2025."
    ],
    "roadmap": [],
    "stats": [
      [
        "2008–2025",
        "Season range"
      ],
      [
        "Power BI",
        "Dashboard"
      ],
      [
        "DAX",
        "Metrics"
      ]
    ],
    "gallery": [
      {
        "src": "assets/images/project-18-detail-1.webp",
        "caption": "IPL season and batting analytics screen"
      },
      {
        "src": "assets/images/project-18-detail-2.webp",
        "caption": "Player and team statistics in Power BI"
      }
    ],
    "featured": false,
    "cover": "assets/images/project-18-cover.webp",
    "video": "assets/videos/project-18.mp4",
    "document": null
  }
];
window.PORTFOLIO_CATEGORIES = {"robotics": "Robotics & Autonomous Systems", "iot": "Embedded Systems & IoT", "cad": "Mechanical CAD & Kinematics", "vision": "Computer Vision & HCI", "software": "AI & Software Engineering", "data": "Data Analytics & BI"};
