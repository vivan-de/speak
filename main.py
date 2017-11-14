#!/usr/bin/env python3
import talk as t
import sys

def main(command):
    t.speak(command)

if __name__ == '__main__':
    main(sys.argv[1])
