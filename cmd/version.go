package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

var version = "1.0-beta"
var gitcommit = "unknown"
var buildtime = "unknown"


var versionCmd = &cobra.Command{
	Use:   "version",
	Short: "print the version of Milvus backup tool",
	Run: func(_ *cobra.Command, _ []string) {
		fmt.Printf("Milvus backup version: %s\n", version)
		fmt.Printf("Git commit hash: %s\n", gitcommit)
		fmt.Printf("Built on: %s\n", buildtime)
	},
}

func init() {
	rootCmd.AddCommand(versionCmd)
}
