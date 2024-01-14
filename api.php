<?php
    // Set the content type to JSON
    header('Content-Type: application/json');
    $method = $_SERVER['REQUEST_METHOD'];

    function verifyData(
        $name,
        $mobileNo,
        $issue,
        $details,
        $timings
    ){
        if($name == "") {
            return "Name required";
        }
        if($mobileNo == "") {
            return "Mobile No required";
        }
        if($issue == "") {
            return "Issue required";
        }
        if(strtolower($issue) == "other" && $details == "") {
            return "Details required";
        }
        if($timings == "") {
            return "Timings required";
        }
        $mobileregex = "/^[6-9][0-9]{9}$/"; 
        if(preg_match($mobileregex, $value) != 1) {
            return "Invalid mobile no provided";
        }
        return "";
    }

    if ($method != 'POST') {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
    }
    else {
        $data = json_decode(file_get_contents('php://input'), true);

        $name = trim($data['name']);
        $mobileNo = trim($data['mobileNo']);
        $issue = trim($data['issue']);
        $details = trim($data['details']);
        $timings = trim($data['timings']);

        $res = verifyData(
            $name,
            $mobileNo,
            $issue,
            $details,
            $timings
        );
        
        if($res != "") {
            http_response_code(200);
            echo json_encode(['error' => $res]);
        }
        else {

        }

        http_response_code(200);
        echo jsos_encode(['received' => $data]);
    }
?>