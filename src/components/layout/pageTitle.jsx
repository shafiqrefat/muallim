"use client"
import { useSelector } from "react-redux";

export default function PageTitle({ title, subtitle }) {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h1
        style={{
          color: darkMode ? '#000000' : '#001529',
          fontSize: '1.75rem',
          fontWeight: 700,
          margin: 0,
          transition: 'color 0.3s ease',
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p style={{ color: darkMode ? '#000000' : '#595959', marginTop: '1rem'}}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
