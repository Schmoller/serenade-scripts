
serenade
    .language("typescript")
    .snippet(
        "add test <%description%>",
        "test(\"<%description%>\", async () => {<%newline%><%indent%><%cursor%><%newline%>})<%terminator%>",
        { description: ["capital"]}
    );

serenade
    .language("typescript")
    .snippet(
        "add test",
        "test(\"<%cursor%>\", async () => {<%newline%><%indent%><%newline%>})<%terminator%>"
    );

serenade
    .language("typescript")
    .snippet(
        "add placeholder test <%description%>",
        "test.todo(\"<%description%><%cursor%>\")<%terminator%>",
        { description: ["capital"]}
    );

serenade
    .language("typescript")
    .snippet(
        "add placeholder test",
        "test.todo(\"<%cursor%>\")<%terminator%>"
    );