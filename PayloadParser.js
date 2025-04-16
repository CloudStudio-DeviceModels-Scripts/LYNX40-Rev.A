function parseUplink(device, payload) {
    var parsed = payload.asJsonObject();
    env.log(parsed);

    // Store Phase A Data
    var e1 = device.endpoints.byAddress("1");
    if(parsed.a_current != null && e1 != null)
        e1.updateGenericSensorStatus(parsed.a_current);

    var e2 = device.endpoints.byAddress("2");
    if(parsed.a_voltage != null && e2 != null)
        e2.updateGenericSensorStatus(parsed.a_voltage);

    var e3 = device.endpoints.byAddress("3");
    if(parsed.a_act_power != null && e3 != null)
        e3.updateGenericSensorStatus(parsed.a_act_power);

    var e4 = device.endpoints.byAddress("4");
    if(parsed.a_aprt_power != null && e4 != null)
        e4.updateGenericSensorStatus(parsed.a_aprt_power);

    var e5 = device.endpoints.byAddress("5");
    if(parsed.a_pf != null && e5 != null)
        e5.updateGenericSensorStatus(parsed.a_pf);

    // Store Phase B Data
    var e6 = device.endpoints.byAddress("6");
    if(parsed.b_current != null && e6 != null)
        e6.updateGenericSensorStatus(parsed.b_current);

    var e7 = device.endpoints.byAddress("7");
    if(parsed.b_voltage != null && e7 != null)
        e7.updateGenericSensorStatus(parsed.b_voltage);

    var e8 = device.endpoints.byAddress("8");
    if(parsed.b_act_power != null && e8 != null)
        e8.updateGenericSensorStatus(parsed.b_act_power);

    var e9 = device.endpoints.byAddress("9");
    if(parsed.b_aprt_power != null && e9 != null)
        e9.updateGenericSensorStatus(parsed.b_aprt_power);

    var e10 = device.endpoints.byAddress("10");
    if(parsed.b_pf != null && e10 != null)
        e10.updateGenericSensorStatus(parsed.b_pf);

    // Store Phase C Data
    var e11 = device.endpoints.byAddress("11");
    if(parsed.c_current != null && e11 != null)
        e11.updateGenericSensorStatus(parsed.c_current);

    var e12 = device.endpoints.byAddress("12");
    if(parsed.c_voltage != null && e12 != null)
        e12.updateGenericSensorStatus(parsed.c_voltage);

    var e13 = device.endpoints.byAddress("13");
    if(parsed.c_act_power != null && e13 != null)
        e13.updateGenericSensorStatus(parsed.c_act_power);

    var e14 = device.endpoints.byAddress("14");
    if(parsed.c_aprt_power != null && e14 != null)
        e14.updateGenericSensorStatus(parsed.c_aprt_power);

    var e15 = device.endpoints.byAddress("15");
    if(parsed.c_pf != null && e15 != null)
        e15.updateGenericSensorStatus(parsed.c_pf);

    // Store Total Data
    var e16 = device.endpoints.byAddress("16");
    if(parsed.total_current != null && e16 != null)
        e16.updateGenericSensorStatus(parsed.total_current);

    var e17 = device.endpoints.byAddress("17");
    if(parsed.total_act_power != null && e17 != null)
        e17.updateGenericSensorStatus(parsed.total_act_power);

    var e18 = device.endpoints.byAddress("18");
    if(parsed.total_aprt_power != null && e18 != null)
        e18.updateGenericSensorStatus(parsed.total_aprt_power);
}
