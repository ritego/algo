package algo

// https://leetcode.com/submissions/detail/788059137/
func twoSum(nums []int, target int) []int {
	var output []int
	var bucket = make(map[int]int)

	for i := 0; i < len(nums); i++ {
		diff := target - nums[i]
		if j, s := bucket[diff]; s {
			return []int{j, i}
		} else {
			bucket[nums[i]] = i
		}
	}

	return output
}
