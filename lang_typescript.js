serenade
  .language("typescript")
  .snippet("add import react", "import React, { FC } from 'react'");
serenade
  .language("typescript")
  .snippet(
    "add component <%name%>",
    "export interface <%name%>Props {}<%newline%><%newline%>export const <%name%>: FC<<%name%>Props> = ({}) => {<%cursor%>}",
    {
      name: ["identifier", "pascal"],
    }
  );
serenade
  .language("typescript")
  .snippet(
    "add state <%name%> set <%setter%>",
    "const [<%name%>, set<%setter%>] = useState(<%cursor%>)",
    { name: ["identifier", "camel"], setter: ["identifier", "pascal"] }
  );
serenade
  .language("typescript")
  .snippet(
    "add <%type%> state <%name%> set <%setter%>",
    "const [<%name%>, set<%setter%>] = useState<<%type%>>(<%cursor%>)",
    {
      name: ["identifier", "camel"],
      setter: ["identifier", "pascal"],
      type: ["identifier"],
    }
  );
serenade
  .language("typescript")
  .snippet(
    "add callback <%name%>",
    "const <%name%> = useCallback((<%cursor%>) => {<%newline%><%indent%><%newline%>}, [])",
    { name: ["identifier", "camel"] }
  );
serenade
  .language("typescript")
  .snippet(
    "add effect",
    "useEffect(() => {<%newline%><%indent%><%cursor%><%newline%>}, [])"
  );
serenade
  .language("typescript")
  .snippet(
    "add effect for <%expression%>",
    "useEffect(() => {<%newline%><%indent%><%cursor%><%newline%>}, [<%expression%>])",
    {expression: ['expression']}
  );
serenade
  .language("typescript")
  .snippet(
    "add layout effect",
    "useLayoutEffect(() => {<%newline%><%indent%><%cursor%><%newline%>}, [])"
  );

serenade
  .language("typescript")
  .snippet(
    "add layout effect for <%expression%>",
    "useLayoutEffect(() => {<%newline%><%indent%><%cursor%><%newline%>}, [<%expression%>])",
    {expression: ['expression']}
  );
