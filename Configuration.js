function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
        var e = endpoints.addEndpoint("1", "Current A", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("2", "Voltage A", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("3", "Active power A", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("4", "APRT Power A", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("5", "PF A", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("6", "Current B", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("7", "Voltage B", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("8", "Active power B", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("9", "APRT Power B", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("10", "PF B", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("11", "Voltage C", endpointType.genericSensor);
        e.variableTypeId = 1019;
            var e = endpoints.addEndpoint("12", "Active power C", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("13", "APRT Power C", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("14", "PF C", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("15", "Current N", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("16", "Total Current", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("17", "Total Active Power", endpointType.genericSensor);
        e.variableTypeId = 1019;
        var e = endpoints.addEndpoint("18", "Total APRT Power", endpointType.genericSensor);
        e.variableTypeId = 1019;

}

function validateDeviceAddress(address, result)
{
  if (address.length != 16) {
    result.ok = false;
    result.errorMessage = {
      en: "The address must be 16 characters long.", 
      es: "La dirección debe tener exactamente 16 caracteres."
    };
  }
}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}