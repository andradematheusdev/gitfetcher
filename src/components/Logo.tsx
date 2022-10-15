import {SVGProps} from 'react';

interface ILogoProps extends SVGProps<SVGSVGElement>{
  dark?: boolean;
}

function SvgComponent({dark = false, ...rest}: ILogoProps) {
  return (
    <svg
      width={rest.width}
      height={rest.height}
      viewBox="0 0 241 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M16.896 19.64a3.979 3.979 0 00-1.76-1.696c-.747-.405-1.632-.608-2.656-.608-1.77 0-3.19.587-4.256 1.76-1.067 1.152-1.6 2.699-1.6 4.64 0 2.07.555 3.69 1.664 4.864 1.13 1.152 2.677 1.728 4.64 1.728 1.344 0 2.475-.341 3.392-1.024.939-.683 1.621-1.664 2.048-2.944h-6.944v-4.032h11.904v5.088c-.405 1.365-1.099 2.635-2.08 3.808-.96 1.173-2.187 2.123-3.68 2.848-1.493.725-3.179 1.088-5.056 1.088-2.219 0-4.203-.48-5.952-1.44a10.625 10.625 0 01-4.064-4.064c-.96-1.728-1.44-3.701-1.44-5.92s.48-4.192 1.44-5.92c.981-1.75 2.336-3.104 4.064-4.064 1.728-.981 3.701-1.472 5.92-1.472 2.688 0 4.95.65 6.784 1.952 1.856 1.301 3.083 3.104 3.68 5.408h-6.048zm14.935-7.104V35h-5.472V12.536h5.472zm20.125 0v4.384h-5.952V35h-5.471V16.92H34.58v-4.384h17.377zm22.203 0V35h-5.472v-9.248h-8.512V35h-5.472V12.536h5.472v8.8h8.512v-8.8h5.472zm9.326 0v13.44c0 1.344.33 2.379.992 3.104.661.725 1.632 1.088 2.912 1.088s2.261-.363 2.944-1.088c.683-.725 1.024-1.76 1.024-3.104v-13.44h5.472v13.408c0 2.005-.427 3.701-1.28 5.088a8.174 8.174 0 01-3.456 3.136c-1.43.704-3.03 1.056-4.8 1.056s-3.36-.341-4.768-1.024c-1.387-.704-2.485-1.75-3.296-3.136-.81-1.408-1.216-3.115-1.216-5.12V12.536h5.472zm30.787 10.944c1.301.277 2.346.928 3.136 1.952.789 1.003 1.184 2.155 1.184 3.456 0 1.877-.662 3.37-1.984 4.48-1.302 1.088-3.126 1.632-5.472 1.632h-10.464V12.536h10.112c2.282 0 4.064.523 5.344 1.568 1.301 1.045 1.952 2.464 1.952 4.256 0 1.323-.352 2.421-1.056 3.296-.683.875-1.6 1.483-2.752 1.824zm-8.128-1.856h3.584c.896 0 1.578-.192 2.048-.576.49-.405.736-.992.736-1.76s-.246-1.355-.736-1.76c-.47-.405-1.152-.608-2.048-.608h-3.584v4.704zm4.032 8.96c.917 0 1.621-.203 2.112-.608.512-.427.768-1.035.768-1.824 0-.79-.267-1.408-.8-1.856-.512-.448-1.227-.672-2.144-.672h-3.968v4.96h4.032z"
        fill={dark ? '#fff' : '#000'}
      />
      <rect x={128} y={12} width={5} height={24} rx={2.5} fill="#0EA5E9" />
      <path
        d="M152.304 18.272v1.776h-7.272v5.64h5.904v1.776h-5.904V35h-2.184V18.272h9.456zm4.822 1.776v5.592h6.096v1.8h-6.096v5.76h6.816V35h-9V18.248h9v1.8h-6.816zm20.416-1.776v1.776h-4.56V35h-2.184V20.048h-4.584v-1.776h11.328zm1.873 8.352c0-1.632.368-3.096 1.104-4.392.736-1.312 1.736-2.336 3-3.072 1.28-.736 2.696-1.104 4.248-1.104 1.824 0 3.416.44 4.776 1.32 1.36.88 2.352 2.128 2.976 3.744h-2.616c-.464-1.008-1.136-1.784-2.016-2.328-.864-.544-1.904-.816-3.12-.816-1.168 0-2.216.272-3.144.816-.928.544-1.656 1.32-2.184 2.328-.528.992-.792 2.16-.792 3.504 0 1.328.264 2.496.792 3.504.528.992 1.256 1.76 2.184 2.304.928.544 1.976.816 3.144.816 1.216 0 2.256-.264 3.12-.792.88-.544 1.552-1.32 2.016-2.328h2.616c-.624 1.6-1.616 2.84-2.976 3.72-1.36.864-2.952 1.296-4.776 1.296-1.552 0-2.968-.36-4.248-1.08a8.07 8.07 0 01-3-3.048c-.736-1.296-1.104-2.76-1.104-4.392zm32.243-8.352V35h-2.184v-7.584h-8.52V35h-2.184V18.272h2.184v7.344h8.52v-7.344h2.184zm5.913 1.776v5.592h6.096v1.8h-6.096v5.76h6.816V35h-9V18.248h9v1.8h-6.816zM236.5 35l-3.984-6.84h-2.64V35h-2.184V18.272h5.4c1.264 0 2.328.216 3.192.648.88.432 1.536 1.016 1.968 1.752.432.736.648 1.576.648 2.52 0 1.152-.336 2.168-1.008 3.048-.656.88-1.648 1.464-2.976 1.752l4.2 7.008H236.5zm-6.624-8.592h3.216c1.184 0 2.072-.288 2.664-.864.592-.592.888-1.376.888-2.352 0-.992-.296-1.76-.888-2.304-.576-.544-1.464-.816-2.664-.816h-3.216v6.336z"
        fill={dark ? '#fff' : '#000'}
      />
    </svg>
  )
}

export default SvgComponent