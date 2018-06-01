--
-- Estructura de tabla para la tabla `tblingresoempleados`
--

CREATE TABLE IF NOT EXISTS `tblRegistroMensual` (
  `cod_registro` int(7) NOT NULL AUTO_INCREMENT,
  `cedula` varchar(100) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `predio_No` varchar(100) NOT NULL,
  `area_terreno` varchar(100) NOT NULL,
  `cuota_admon` varchar(100) NOT NULL,
  `saldo_mes_anterior` varchar(100) NOT NULL,
  `intereses` varchar(100) NOT NULL,
  `cuota_mes_anterior` varchar(100) NOT NULL,
  `multas` varchar(100) NOT NULL,
  `cuota_extra` varchar(100) NOT NULL,
  `otros` varchar(100) NOT NULL,
  `total_mes` varchar(100) NOT NULL,
  `pagos` varchar(100) NOT NULL,
  `saldo` varchar(100) NOT NULL,
  `mes_reporte` varchar(10) NOT NULL,
  `anio_reporte` varchar(10) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  PRIMARY KEY (`cod_registro`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 ;
