name := """tnhAwesome"""

version := "1.0"

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  "org.postgresql" % "postgresql" % "9.4-1202-jdbc42",
  "org.webjars" % "angularjs" % "1.3.0-beta.2",
  "org.webjars" % "requirejs" % "2.1.11-1"
)
libraryDependencies += evolutions

routesGenerator := InjectedRoutesGenerator

pipelineStages := Seq(rjs, digest, gzip)

fork in run := true
